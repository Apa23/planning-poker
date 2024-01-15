import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CARDMODE, GAMEMODE } from '../../config/enums/game.enum';
import {
  GameInfoInterface,
  PlayerInfoInterface,
} from '../../config/interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  // Atributes
  private _gameName: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _playerInfo: BehaviorSubject<PlayerInfoInterface> =
    new BehaviorSubject<PlayerInfoInterface>({
      name: '',
      initials: '',
      gameMode: GAMEMODE.NONE,
      selected: false,
      selectedNumber: null,
      host: false,
      login: false,
    });
  private _gameInfo: BehaviorSubject<GameInfoInterface> =
    new BehaviorSubject<GameInfoInterface>({
      cardMode: CARDMODE.NONE,
      displayInviteModal: false,
    });

  // Observables
  public gameName$: Observable<string> = this._gameName.asObservable();
  public playerInfo$: Observable<PlayerInfoInterface> =
    this._playerInfo.asObservable();
  public gameInfo$: Observable<GameInfoInterface> =
    this._gameInfo.asObservable();

  // Functions
  public setGameName(gameName: string): void {
    this._gameName.next(gameName);
  }

  public getGameName(): string {
    return this._gameName.getValue();
  }

  public setPlayerInfo(playerInfo: PlayerInfoInterface): void {
    this._playerInfo.next(playerInfo);
  }

  public getPlayerInfo(): PlayerInfoInterface {
    return this._playerInfo.getValue();
  }

  public setGameInfo(gameInfo: GameInfoInterface): void {
    this._gameInfo.next(gameInfo);
  }

  public getGameInfo(): GameInfoInterface {
    return this._gameInfo.getValue();
  }
}
