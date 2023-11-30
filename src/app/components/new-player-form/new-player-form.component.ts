import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { playerInfoInterface } from 'src/config/interfaces/player.interface';
import { GAMEMODE } from 'src/config/enums/game.enum';

@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.css'],
})
export class NewPlayerFormComponent {
  @Output() newPlayer: EventEmitter<playerInfoInterface> =
    new EventEmitter<playerInfoInterface>();
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
