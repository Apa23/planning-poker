import { Component, Input } from '@angular/core';
import { zoomIn } from '../../../../assets/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [zoomIn],
})
export class ModalComponent {
  @Input() header: boolean = false;
  @Input() type: string = '';
  @Input() size: string = 'md';
  @Input() onClose?: (args?: any) => void;
}
