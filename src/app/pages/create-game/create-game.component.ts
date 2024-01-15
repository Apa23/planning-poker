import { Component } from '@angular/core';
import { GameDataService } from '../../services/game-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent {
  gameName: string = '';

  constructor(
    private gameDataService: GameDataService,
    private router: Router
  ) {
    gameDataService.playerInfo$.subscribe((playerInfo) => {
      if (!playerInfo.login) {
        this.router.navigate(['/login']);
      }
    });
  }

  onCreateGame(name: string) {
    this.gameName = name;
    this.gameDataService.setGameName(this.gameName);
  }
}
