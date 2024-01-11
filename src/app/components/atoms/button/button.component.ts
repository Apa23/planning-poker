import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BUTTON_TYPE } from '../../../../config/enums/app.enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() id: string = '';
  @Input() text: string = '';
  @Input() type: string = BUTTON_TYPE.FILLED;
  @Input() disabled: boolean = false;
  @Input() location: string = '';
  @Output() click: EventEmitter<any> = new EventEmitter<any>();


  onClick(event: Event) {
    event.preventDefault();
    this.click.emit();
  }
}
