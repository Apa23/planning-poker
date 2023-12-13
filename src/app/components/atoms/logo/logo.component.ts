import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() title: string = '';
}
