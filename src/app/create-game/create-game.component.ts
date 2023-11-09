import { Component } from '@angular/core';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent {
  gameName: string = '';

  constructor(private gameDataService: GameDataService) {}

  onCreateGame(name: string) {
    this.gameName = name;
    this.gameDataService.setGameName(this.gameName);
  }
}
