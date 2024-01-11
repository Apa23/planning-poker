import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() randomSelectionChange: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() displayResult: EventEmitter<any> = new EventEmitter<any>();
  @Output() newGame: EventEmitter<any> = new EventEmitter<any>();

  onRandomSelectionChange = (name: string) => {
    this.randomSelectionChange.emit(name);
  };

  onDisplayResult = (event: any) => {
    event.preventDefault();
    this.displayResult.emit();
  };

  onNewGame = (event: any) => {
    event.preventDefault();
    this.newGame?.emit();
  };
}
