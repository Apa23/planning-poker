import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.css'],
})
export class NewGameFormComponent {
  @Output() gameName: EventEmitter<string> = new EventEmitter<string>();

  submitted = false;

  gameNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20),
    Validators.pattern('^[a-zA-Z0-9](?=(?:\\D*\\d){0,3}\\D*$)[a-zA-Z0-9]*$'),
  ]);

  onCreateGame(event: Event) {
    event.preventDefault();
    this.submitted = true;
    this.gameName.emit(this.gameNameControl.value || '');
  }
}
