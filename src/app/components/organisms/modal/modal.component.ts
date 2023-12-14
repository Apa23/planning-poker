import { Component } from '@angular/core';
import { zoomIn } from 'src/assets/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [zoomIn],
})
export class ModalComponent {}
