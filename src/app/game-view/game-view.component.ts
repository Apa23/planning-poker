import { Component } from '@angular/core';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
})
export class GameViewComponent {
  displayNewPlayerForm: boolean = true;
  gameName: string = '';
  hostName: string = 'Andres';
  hostInitials: string = 'AN';

  constructor(private gameDataService: GameDataService) {
    this.gameName = this.gameDataService.getGameName();
  }

  onDisplayNewPlayerForm(display: boolean) {
    this.displayNewPlayerForm = display;
  }
}
