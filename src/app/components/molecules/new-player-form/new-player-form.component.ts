import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { playerInfoInterface } from 'src/config/interfaces/player.interface';
import { GAMEMODE } from 'src/config/enums/game.enum';
import { GameDataService } from 'src/app/services/game-data.service';

@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.css'],
})
export class NewPlayerFormComponent {
  constructor(private gameDataService: GameDataService) {}

  newPlayerForm = new FormGroup({
    playerName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z0-9](?=(?:\\D*\\d){0,3}\\D*$)[a-zA-Z0-9]*$'),
    ]),
    gameMode: new FormControl('', [Validators.required]),
  });

  onCreatePlayer = () => {
    const player = {
      name: this.newPlayerForm.get('playerName')?.value || '',
      initials: this.newPlayerForm.get('playerName')?.value?.slice(0, 2) || '',
      gameMode: this.newPlayerForm
        .get('gameMode')
        ?.value?.toLowerCase() as GAMEMODE,
      selected: false,
      selectedNumber: null,
    };
    this.gameDataService.setPlayerInfo(player);
  };
}
