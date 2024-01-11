import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GAMEMODE } from '../../../../config/enums/game.enum';
import { GameDataService } from '../../../services/game-data.service';

@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.css'],
})
export class NewPlayerFormComponent {
  
  newPlayerForm = new FormGroup({
    playerName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z0-9](?=(?:\\D*\\d){0,3}\\D*$)[a-zA-Z0-9]*$'),
    ]),
    gameMode: new FormControl('Jugador', [Validators.required]),
  });

  constructor(private gameDataService: GameDataService, private router: Router) {
    
  }

  onChangeGameMode = (event: any) => {
    this.newPlayerForm.patchValue({ gameMode: event.target.value });

  };

  onCreatePlayer = () => {
    const player = {
      name: this.newPlayerForm.get('playerName')?.value || '',
      initials: this.newPlayerForm.get('playerName')?.value?.slice(0, 2) || '',
      gameMode: this.newPlayerForm
        .get('gameMode')
        ?.value?.toLowerCase() as GAMEMODE,
      selected: false,
      selectedNumber: null,
      host: true,
    };
    this.gameDataService.setPlayerInfo(player);
  };

  onCancel = () => {
    this.router.navigate(['/']);
  }
}
