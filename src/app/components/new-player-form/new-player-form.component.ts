import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GAMEMODE } from 'src/app/models/game.model';

@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.css'],
})
export class NewPlayerFormComponent {
  playerName: string = '';
  gameMode: GAMEMODE = GAMEMODE.NONE;
  submitted = false;

  newPlayerForm = new FormGroup({
    playerName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z0-9](?=(?:\\D*\\d){0,3}\\D*$).*$'),
    ]),
    gameMode: new FormControl('', [Validators.required]),
  });

  gameModeControl = new FormControl('', [Validators.required]);

  onCreatePlayer(event: Event) {
    event.preventDefault();
    this.submitted = true;
    this.playerName = this.newPlayerForm.get('playerName')?.value || '';
    console.log(`Creating game: ${this.playerName}`);
  }

  onChangeGameMode(event: Event) {
    this.gameMode = this.gameModeControl.value as GAMEMODE;
  }
}
