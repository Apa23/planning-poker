import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GAMEMODE } from '../../../../config/enums/game.enum';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
})
export class PlayerCardComponent {
  @Input() name: string = '';
  @Input() initials: string = '';
  @Input() selected: boolean = false;
  @Input() selectedNumber: number | null = 0;
  @Input() gameMode: GAMEMODE = GAMEMODE.NONE;
  @Input() host: boolean = false;
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  onSelectionChange = (event: any) => {
    this.selectionChange.emit(this.name);
  };
}
