import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css'],
})
export class UserAreaComponent {
  playerInitials: string = '';
  displayUserMenu: boolean = false;
  onDisplayUserMenu = () => {
    this.displayUserMenu = !this.displayUserMenu;
  };
  onDisplayInvitePlayers() {}
}
