import { Component, Input } from '@angular/core';
import { GameDataService } from 'src/app/services/game-data.service';

@Component({
  selector: 'app-user-logo',
  templateUrl: './user-logo.component.html',
  styleUrls: ['./user-logo.component.css'],
})
export class UserLogoComponent {
  playerInitials: string = '';
  playerName: string = '';
  displayUserMenu: boolean = false;
  @Input() displayUserName: boolean = false;

  constructor(gameDataService: GameDataService) {
    gameDataService.playerInfo$.subscribe((playerInfo) => {
      this.playerInitials = playerInfo.initials;
      this.playerName = playerInfo.name;
    });
  }

  onDisplayUserMenu() {
    this.displayUserMenu = !this.displayUserMenu;
  }
}
