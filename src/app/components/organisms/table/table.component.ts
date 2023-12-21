import { Component, Input } from '@angular/core';
import { fadeIn, fadeOut } from '../../../../assets/animations';
import { playerInfoInterface } from '../../../../config/interfaces/player.interface';

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
  @Input() onRandomSelectionChange?: (name: string) => void;
  @Input() onDisplayResult?: (args?: any) => void;
  @Input() onNewGame?: (args?: any) => void;
}
