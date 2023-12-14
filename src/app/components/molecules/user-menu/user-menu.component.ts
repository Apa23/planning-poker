import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
  @Input() displayUserMenu: boolean = false;
  displayInvitePlayers: boolean = false;
  displayChangeCardMode: boolean = false;
  onDisplayInvitePlayers() {
    this.displayInvitePlayers = !this.displayInvitePlayers;
  }
  onDisplayChangeCardMode() {
    this.displayChangeCardMode = !this.displayChangeCardMode;
  }
  onCardModeChange(event: any) {
    this.displayChangeCardMode = false;
  }
  onChangeGameMode() {
    this.displayChangeCardMode = false;
  }
}
