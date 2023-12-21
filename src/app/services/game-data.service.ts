import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CARDMODE, GAMEMODE } from '../../config/enums/game.enum';
import {
  gameInfoInterface,
  playerInfoInterface,
} from '../../config/interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  // Atributes
  private _gameName: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _playerInfo: BehaviorSubject<playerInfoInterface> =
    new BehaviorSubject<playerInfoInterface>({
      name: '',
      initials: '',
      gameMode: GAMEMODE.NONE,
      selected: false,
      selectedNumber: null,
    });
  private _gameInfo: BehaviorSubject<gameInfoInterface> =
    new BehaviorSubject<gameInfoInterface>({
      cardMode: CARDMODE.NONE,
      displayInviteModal: false,
    });

  // Observables
  public gameName$: Observable<string> = this._gameName.asObservable();
  public playerInfo$: Observable<playerInfoInterface> =
    this._playerInfo.asObservable();
  public gameInfo$: Observable<gameInfoInterface> =
    this._gameInfo.asObservable();

  // Functions
  public setGameName(gameName: string): void {
    this._gameName.next(gameName);
  }

  public getGameName(): string {
    return this._gameName.getValue();
  }

  public setPlayerInfo(playerInfo: playerInfoInterface): void {
    this._playerInfo.next(playerInfo);
  }

  public getPlayerInfo(): playerInfoInterface {
    return this._playerInfo.getValue();
  }

  public setGameInfo(gameInfo: gameInfoInterface): void {
    this._gameInfo.next(gameInfo);
  }

  public getGameInfo(): gameInfoInterface {
    return this._gameInfo.getValue();
  }
}
