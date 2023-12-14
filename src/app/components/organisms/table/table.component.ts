import { Component, Input } from '@angular/core';
import { fadeIn, fadeOut } from 'src/assets/animations';
import { playerInfoInterface } from 'src/config/interfaces/player.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [fadeIn, fadeOut],
})
export class TableComponent {
  @Input() players: playerInfoInterface[] = [];
  @Input() displayNewPlayerForm: boolean = true;
  @Input() selectionDone: boolean = false;
  @Input() revealResult: boolean = false;
  @Input() onRandomSelectionChange: (name: string) => void = () => {};
  @Input() onDisplayResult: () => void = () => {};
  @Input() onNewGame: () => void = () => {};
}
