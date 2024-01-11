import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() innerText: string = '';
  @Input() footerText: string = '';
  @Input() selected: boolean = false;
  @Input() showToolTip: boolean = true;
  tooltip: string = '';

  ngOnInit() {
    this.tooltip =
      this.innerText == '?'
        ? 'Selección aleatoria'
        : this.innerText == '☕️'
        ? 'Pasar'
        : `Seleccionar ${this.innerText}`;
  }
}
