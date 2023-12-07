import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeIn, fadeOut, zoomIn, zoomOut } from 'src/assets/animations';

@Component({
  selector: 'app-invite-player',
  templateUrl: './invite-player.component.html',
  styleUrls: ['./invite-player.component.css'],
  animations: [zoomIn, zoomOut, fadeIn, fadeOut],
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
