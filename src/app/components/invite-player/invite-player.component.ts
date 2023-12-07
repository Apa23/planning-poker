import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-invite-player',
  templateUrl: './invite-player.component.html',
  styleUrls: ['./invite-player.component.css'],
})
export class InvitePlayerComponent {
  @Output() displayInvitePlayers: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  invitationLink: string = 'https://prsgplsnningpoker.com/9QdP98VGUrZQLNCqYAF7';
  displayNotification: boolean = false;

  onDisplayNotification(display: boolean) {
    this.displayNotification = display;
  }

  onClose() {
    this.displayInvitePlayers.emit(false);
  }

  onCopyLink() {
    navigator.clipboard.writeText(this.invitationLink);
    this.displayNotification = true;
  }
}
