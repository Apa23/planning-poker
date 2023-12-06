import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-invite-player',
  templateUrl: './invite-player.component.html',
  styleUrls: ['./invite-player.component.css'],
})
export class InvitePlayerComponent {
  @Output() displayInvitePlayers: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  onClose() {
    this.displayInvitePlayers.emit(false);
  }
}
