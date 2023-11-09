import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GAMEMODE, Player } from 'src/app/models/game.model';

@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.css'],
})
export class NewPlayerFormComponent {
  @Output() newPlayer: EventEmitter<Player> = new EventEmitter<Player>();
  @Output() displayNewPlayerForm: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  newPlayerForm = new FormGroup({
    playerName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z0-9](?=(?:\\D*\\d){0,3}\\D*$)[a-zA-Z0-9]*$'),
    ]),
    gameMode: new FormControl('', [Validators.required]),
  });

  gameModeControl = new FormControl('', [Validators.required]);

  onCreatePlayer(event: Event) {
    event.preventDefault();
    const player = {
      name: this.newPlayerForm.get('playerName')?.value || '',
      mode: this.newPlayerForm.get('gameMode')?.value as GAMEMODE,
    };
    this.newPlayer.emit(player);
    this.displayNewPlayerForm.emit(false);
  }
}
