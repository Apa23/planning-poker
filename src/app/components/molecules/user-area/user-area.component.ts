import { Component, Input } from '@angular/core';
import { GameDataService } from '../../../services/game-data.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css'],
})
export class UserAreaComponent {
  displayUserMenu: boolean = false;

  constructor(private gameDataService: GameDataService) {}

  onDisplayUserMenu = () => {
    this.displayUserMenu = !this.displayUserMenu;
  };

  onDisplayInvitePlayerModal = () => {
    const gameInfo = this.gameDataService.getGameInfo();
    this.gameDataService.setGameInfo({
      ...gameInfo,
      displayInviteModal: !gameInfo.displayInviteModal,
    });
  };
}
