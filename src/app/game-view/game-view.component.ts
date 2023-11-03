import { Component } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
})
export class GameViewComponent {
  displayNewPlayerForm: boolean = true;

  onDisplayNewPlayerForm(display: boolean) {
    this.displayNewPlayerForm = display;
    console.log(this.displayNewPlayerForm);
  }
}
