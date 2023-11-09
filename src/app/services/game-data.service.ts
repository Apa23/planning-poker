import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  // Atributes
  private _gameName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // Observables
  public gameName$: Observable<string> = this._gameName.asObservable();

  // Functions
  public setGameName(gameName: string): void {
    this._gameName.next(gameName);
  }

  public getGameName(): string {
    return this._gameName.getValue();
  }
}
