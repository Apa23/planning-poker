import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameComponent } from './create-game.component';
import { GameDataService } from '../../services/game-data.service';

describe('CreateGameComponent', () => {
  let component: CreateGameComponent;
  let dataService: GameDataService;

  beforeEach(() => {
    dataService = new GameDataService();
    component = new CreateGameComponent(dataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
