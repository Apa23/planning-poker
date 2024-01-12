import { Component, Input } from '@angular/core';
import { GameDataService } from '../../../services/game-data.service';
import { CARDMODE, GAMEMODE } from '../../../../config/enums/game.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
  @Input() displayUserMenu: boolean = false;
  displayChangeCardMode: boolean = false;

  constructor(private gameDataService: GameDataService, private router: Router) {}

  onDisplayChangeCardMode() {
    this.displayChangeCardMode = !this.displayChangeCardMode;
  }
  onCardModeChange(event: any) {
    const newMode = event.target.value;
    const gameInfo = this.gameDataService.getGameInfo();
    this.gameDataService.setGameInfo({ ...gameInfo, cardMode: newMode });
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
  onExitGame = () => {
    this.gameDataService.setGameInfo({
      displayInviteModal: false,
      cardMode: CARDMODE.NONE,
    });
    this.gameDataService.setPlayerInfo({
      name: '',
      gameMode: GAMEMODE.NONE,
      host: false,
      initials: '',
      selected: false,
      selectedNumber: null,
    });
    this.router.navigate(['/']);

  };
}
