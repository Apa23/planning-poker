import { Component } from '@angular/core';
import {
  fadeIn,
  fadeOut,
  zoomIn,
  zoomOut,
} from '../../../../assets/animations';

@Component({
  selector: 'app-invite-player',
  templateUrl: './invite-player.component.html',
  styleUrls: ['./invite-player.component.css'],
  animations: [zoomIn, zoomOut, fadeIn, fadeOut],
})
export class InvitePlayerComponent {
  invitationLink: string = 'https://prsgplsnningpoker.com/9QdP98VGUrZQLNCqYAF7';

  onCopyLink = () => {
    navigator.clipboard.writeText(this.invitationLink);
  };
}
