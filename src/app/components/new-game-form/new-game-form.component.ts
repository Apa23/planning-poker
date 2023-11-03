import { Component, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.css'],
})
export class NewGameFormComponent {
  @Output() gameName: string = '';

  submitted = false;

  gameNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20),
    Validators.pattern('^[a-zA-Z0-9](?=(?:\\D*\\d){0,3}\\D*$).*$'),
  ]);

  onCreateGame(event: Event) {
    event.preventDefault();
    this.submitted = true;
    this.gameName = this.gameNameControl.value || '';
    console.log(`Creating game: ${this.gameName}`);
    console.log(this.gameNameControl.errors);
  }
}
