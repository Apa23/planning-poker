import { Component } from '@angular/core';
import { GameDataService } from '../services/game-data.service';
import { Player } from '../models/game.model';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
})
export class GameViewComponent {
  displayNewPlayerForm: boolean = true;
  gameName: string = '';
  playerName: string = '';
  playerInitials: string = '';
  playedNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  avarage: number =
    this.playedNumbers.map((n) => n).reduce((a, b) => a + b) /
    this.playedNumbers.length;

  constructor(private gameDataService: GameDataService) {
    this.gameName = this.gameDataService.getGameName();
  }

  onDisplayNewPlayerForm(display: boolean) {
    this.displayNewPlayerForm = display;
  }

  onCreatePlayer(player: Player) {
    this.playerName = player.name;
    this.playerInitials =
      player.name[0].toUpperCase() + player.name[1].toUpperCase();
  }
}
