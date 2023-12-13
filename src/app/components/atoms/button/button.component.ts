import { Component, Input } from '@angular/core';
import { BUTTON_TYPE } from 'src/config/enums/app.enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: BUTTON_TYPE = BUTTON_TYPE.FILLED;
  @Input() disabled: boolean = false;
  @Input() location: string = '';
  @Input() action: () => void = () => {};
}
