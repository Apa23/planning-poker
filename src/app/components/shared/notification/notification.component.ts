import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  @Input() message: string = '';
  @Input() type: string = 'info';
  @Output() displayNotification: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor() {
    setTimeout(() => {
      this.displayNotification.emit(false);
    }, 3000);
  }

  onClose() {
    this.displayNotification.emit(false);
  }
}
