import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.css'],
})
export class InputLabelComponent {
  @Input() text: string = '';
  @Input() for: string = '';
}
