import { Component } from '@angular/core';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent {
  gameName: string = '';

  onCreateGame(name: string) {
    this.gameName = name;
  }
}
