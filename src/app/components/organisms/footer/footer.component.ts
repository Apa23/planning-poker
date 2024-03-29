import { Component, EventEmitter, Input, Output } from '@angular/core';
import { zoomIn, zoomOut } from '../../../../assets/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [zoomIn, zoomOut],
})
export class FooterComponent {
  @Input() displayNewPlayerForm: boolean = true;
  @Input() revealResult: boolean = false;
  @Input() gameMode: string = '';
  @Input() playerSelection: number | string | null = null;
  @Input() selectionCards: (number | string)[] = [];
  @Input() occurrences: any = {};
  @Input() avarage: number = 0;
  @Output() selectionChange: EventEmitter<string | number> = new EventEmitter<string | number>();

  onSelectionChange = (selection: string | number) => {
    this.selectionChange.emit(selection);
  };
}
