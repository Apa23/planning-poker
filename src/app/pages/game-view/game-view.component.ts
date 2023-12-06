import { Component } from '@angular/core';
import { GameDataService } from '../../services/game-data.service';
import { playerInfoInterface } from 'src/config/interfaces/player.interface';
import { playersList } from 'src/config/data/players';
import { GAMEMODE } from 'src/config/enums/game.enum';
import { FIBONACCI, SELECTION_CARDS } from 'src/config/data/game.constant';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
})
export class GameViewComponent {
  // Game info
  gameName: string = '';
  players: playerInfoInterface[] = playersList;
  playedNumbers: number[] = [];
  avarage: number = 0;
  selectionCards: (number | string)[] = SELECTION_CARDS;

  // Game state
  displayNewPlayerForm: boolean = true;
  selectionDone: boolean = false;
  revealResult: boolean = false;
  displayInvitePlayers: boolean = false;

  // Host info
  playerName: string = '';
  playerInitials: string = '';
  gameMode = GAMEMODE.NONE;
  playerSelection: number | string | null = null;

  constructor(private gameDataService: GameDataService) {
    this.gameName = this.gameDataService.getGameName();
  }

  onDisplayNewPlayerForm(display: boolean) {
    this.displayNewPlayerForm = display;
  }

  onDisplayInvitePlayers(display: boolean) {
    this.displayInvitePlayers = display;
  }

  onCreatePlayer(player: playerInfoInterface) {
    this.players = [
      ...this.players.slice(0, this.players.length - 1),
      player,
      ...this.players.slice(this.players.length - 1),
    ];
    this.playerName = player.name;
    this.playerInitials = player.initials;
    this.gameMode = player.gameMode;
  }

  onSelectionChange(selection: number | string) {
    if (selection === '?') {
      const randomFibo =
        FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)];
      this.players[this.players.length - 2].selected = true;
      this.players[this.players.length - 2].selectedNumber = randomFibo;
      this.playerSelection = '?';
      return;
    }
    this.playerSelection = selection;
    this.players[this.players.length - 2].selected = true;
    this.players[this.players.length - 2].selectedNumber =
      typeof selection === 'number' ? selection : null;
    this.checkSelectionDone();
  }

  public onRandomSelectionChange = (name: string) => {
    this.players.forEach((player) => {
      if (player.name === name) {
        player.selected = !player.selected;
        player.selected
          ? (player.selectedNumber =
              FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)])
          : (player.selectedNumber = 0);
      }
    });
    this.checkSelectionDone();
  };

  checkSelectionDone() {
    this.players.every((player) => {
      if (player.gameMode === GAMEMODE.ESPECTADOR) {
        return true;
      } else {
        return player.selected;
      }
    })
      ? (this.selectionDone = true)
      : (this.selectionDone = false);
  }

  onDisplayResult() {
    const amountOfPlayers = this.players.filter(
      (player) => player.selectedNumber !== null
    ).length;
    this.playedNumbers = this.players.map((player) => {
      if (player.selectedNumber) {
        return player.selectedNumber;
      } else {
        return 0;
      }
    });
    this.avarage = (
      this.playedNumbers.map((n) => n).reduce((a, b) => a + b) / amountOfPlayers
    ).toFixed(2) as any;
    this.revealResult = true;
  }

  onNewGame() {
    this.playedNumbers = [];
    this.avarage = 0;
    this.selectionDone = false;
    this.revealResult = false;
    this.playerSelection = null;
    this.players.forEach((player) => {
      this.onRandomSelectionChange(player.name);
    });
  }
}
