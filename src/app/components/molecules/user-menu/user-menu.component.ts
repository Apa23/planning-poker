import { Component, Input } from '@angular/core';
import { GameDataService } from '../../../services/game-data.service';
import { GAMEMODE } from '../../../../config/enums/game.enum';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
  @Input() displayUserMenu: boolean = false;
  displayChangeCardMode: boolean = false;

  constructor(private gameDataService: GameDataService) {}

  onDisplayChangeCardMode() {
    this.displayChangeCardMode = !this.displayChangeCardMode;
  }
  onCardModeChange(event: any) {
    const newMode = event.target.value;
    this.gameDataService.setGameInfo({ cardMode: newMode });
  }
  onChangeGameMode() {
    const playerInfo = this.gameDataService.getPlayerInfo();
    const newMode = (
      playerInfo.gameMode === 'jugador' ? 'espectador' : 'jugador'
    ) as GAMEMODE;
    this.gameDataService.setPlayerInfo({
      ...playerInfo,
      gameMode: newMode,
    });
  }
}
