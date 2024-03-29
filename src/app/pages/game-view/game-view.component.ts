import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameDataService } from '../../services/game-data.service';
import { PlayerInfoInterface } from '../../../config/interfaces/player.interface';
import { playersList } from '../../../config/data/players';
import { GAMEMODE } from '../../../config/enums/game.enum';
import {
  FIBONACCI,
  SEQUENCE,
  EXTRA_SELECTION_CARDS,
} from '../../../config/data/game.constant';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
})
export class GameViewComponent {
  // Game info
  gameName: string = '';
  cardMode: string = 'fibonacci';
  cardsList: number[] = FIBONACCI;
  players: PlayerInfoInterface[] = playersList;
  playedNumbers: number[] = [];
  occurrences: any = {};
  avarage: number = 0;
  selectionCards: (number | string)[] = [
    ...FIBONACCI,
    ...EXTRA_SELECTION_CARDS,
  ];

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

  constructor(
    private gameDataService: GameDataService,
    private router: Router
  ) {
    this.gameName = this.gameDataService.getGameName();

    gameDataService.playerInfo$.subscribe((playerInfo) => {
      if (playerInfo.name) {
        this.onCreatePlayer(playerInfo);
      }
    });
    gameDataService.gameInfo$.subscribe((gameInfo) => {
      if (gameInfo.cardMode) {
        this.onCardModeChange(gameInfo.cardMode);
      }
      if (gameInfo.displayInviteModal) {
        this.onDisplayInvitePlayers();
      }
    });
  }

  ngOnInit(): void {
    if (this.gameName === '') {
      this.router.navigate(['/']);
    }
  }

  onDisplayNewPlayerForm = () => {
    this.displayNewPlayerForm = !this.displayNewPlayerForm;
  };

  onDisplayInvitePlayers = () => {
    this.displayInvitePlayers = !this.displayInvitePlayers;
  };

  onChangeGameMode() {
    this.gameMode =
      this.gameMode === GAMEMODE.ESPECTADOR
        ? GAMEMODE.JUGADOR
        : GAMEMODE.ESPECTADOR;
    this.players[this.players.length - 2].gameMode = this.gameMode;
  }

  onCardModeChange(newMode: string) {
    if (newMode === this.cardMode || newMode === 'none' || !newMode) {
      return;
    }
    this.cardMode = newMode;
    if (this.cardMode === 'random') {
      const RANDOM = Array.from({ length: 11 }, (_, index) =>
        Math.floor(Math.random() * 100)
      )
        .sort(() => Math.random() - 0.5)
        .sort((a, b) => a - b);
      this.selectionCards = [...RANDOM, ...EXTRA_SELECTION_CARDS];
      this.cardsList = RANDOM;
    } else if (this.cardMode === 'sequence') {
      this.selectionCards = [...SEQUENCE, ...EXTRA_SELECTION_CARDS];
      this.cardsList = SEQUENCE;
    } else {
      this.selectionCards = [...FIBONACCI, ...EXTRA_SELECTION_CARDS];
      this.cardsList = FIBONACCI;
    }
    this.resetSelections();
  }

  onCreatePlayer(player: PlayerInfoInterface) {
    const playerExist = this.players.find(
      (playerItem) => playerItem.name === player.name
    );

    if (playerExist) {
      this.playerName = player.name;
      this.playerInitials = player.initials;
      this.gameMode = player.gameMode;
      this.players[this.players.length - 2] = player;
      return;
    }

    this.players = [
      ...this.players.slice(0, this.players.length - 1),
      player,
      ...this.players.slice(this.players.length - 1),
    ];
    this.playerName = player.name;
    this.playerInitials = player.initials;
    this.gameMode = player.gameMode;
    this.onDisplayNewPlayerForm();
  }

  onSelectionChange = (selection: number | string) => {
    if (this.playerSelection === selection) {
      this.playerSelection = null;
      this.players[this.players.length - 2].selected = false;
      this.players[this.players.length - 2].selectedNumber = null;
      return;
    }
    if (selection === '?') {
      const randomFibo =
        this.cardsList[Math.floor(Math.random() * this.cardsList.length)];
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
  };

  onRandomSelectionChange = (name: string) => {
    this.players.forEach((player) => {
      if (player.name === name) {
        player.selected = !player.selected;
        player.selectedNumber = player.selected
          ? this.cardsList[Math.floor(Math.random() * this.cardsList.length)]
          : 0;
      }
    });
    this.checkSelectionDone();
  };

  checkSelectionDone() {
    this.selectionDone = this.players.every((player) => {
      if (player.gameMode === GAMEMODE.ESPECTADOR) {
        return true;
      } else {
        return player.selected;
      }
    });
  }

  onDisplayResult = () => {
    // Avarage calculation
    const amountOfPlayers = this.players.filter(
      (player) => player.selectedNumber !== null
    ).length;
    this.playedNumbers = this.players
      .map((player) => {
        if (player.selectedNumber) {
          return player.selectedNumber;
        } else {
          return 0;
        }
      })
      .filter((n) => n !== 0);

    this.avarage = (
      this.playedNumbers.map((n) => n).reduce((a, b) => a + b) / amountOfPlayers
    ).toFixed(2) as any;
    this.revealResult = true;

    // Occurrences calculation
    this.occurrences = this.playedNumbers.reduce((acc: any, curr: any) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  };

  onNewGame = () => {
    this.playedNumbers = [];
    this.avarage = 0;
    this.selectionDone = false;
    this.revealResult = false;
    this.playerSelection = null;
    this.players.forEach((player) => {
      this.onRandomSelectionChange(player.name);
    });
  };

  resetSelections = () => {
    this.players.forEach((player) => {
      player.selected = false;
      player.selectedNumber = null;
    });
    this.checkSelectionDone();
  };
}
