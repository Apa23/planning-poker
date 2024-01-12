import { TestBed } from '@angular/core/testing';
import { GameDataService } from './game-data.service';
import { GAMEMODE } from '../../config/enums/game.enum';

describe('GameDataService', () => {
  let service: GameDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Testing gets functions
  test('should return player information', () => {
    expect(service.getPlayerInfo()).toEqual({
      name: '',
      initials: '',
      gameMode: GAMEMODE.NONE,
      selected: false,
      selectedNumber: null,
      host: false,
    });
  });
});
