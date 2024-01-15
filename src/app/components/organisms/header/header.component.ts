import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() gameName: string = '';
  @Input() inGame: boolean = false;  
  @Input() inLogin: boolean = false;  
}
