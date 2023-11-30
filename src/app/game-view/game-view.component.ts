import { Component } from '@angular/core';
import { GameDataService } from '../services/game-data.service';
import { playerInfoInterface } from 'src/config/interfaces/player.interface';
import { playersList } from 'src/config/data/players';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
})
export class GameViewComponent {
  players: playerInfoInterface[] = playersList;
  displayNewPlayerForm: boolean = true;
  selectionDone: boolean = false;
  revealResult: boolean = false;
  gameName: string = '';
  playerName: string = '';
  playerInitials: string = '';
  playedNumbers: number[] = [];
  avarage: number = 0;

  constructor(private gameDataService: GameDataService) {
    this.gameName = this.gameDataService.getGameName();
  }

  onDisplayNewPlayerForm(display: boolean) {
    this.displayNewPlayerForm = display;
  }

  onCreatePlayer(player: playerInfoInterface) {
    this.playerName = player.name;
    this.playerInitials =
      player.name[0].toUpperCase() + player.name[1].toUpperCase();
  }

  public onSelectionChange = (name: string) => {
    this.players.forEach((player) => {
      if (player.name === name) {
        player.selected = !player.selected;
        player.selected
          ? (player.selectedNumber = Math.floor(Math.random() * 10) + 1)
          : (player.selectedNumber = 0);
      }
    });

    this.checkSelectionDone();
  };

  checkSelectionDone() {
    this.players.every((player) => {
      return player.selected;
    })
      ? (this.selectionDone = true)
      : (this.selectionDone = false);
  }

  onDisplayResult() {
    this.playedNumbers = this.players.map((player) => {
      if (player.selectedNumber) {
        return player.selectedNumber;
      } else {
        return 0;
      }
    });
    this.avarage = (
      this.playedNumbers.map((n) => n).reduce((a, b) => a + b) /
      this.playedNumbers.length
    ).toFixed(2) as any;
    this.revealResult = true;
  }
}
