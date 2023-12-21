import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogoComponent } from './user-logo.component';
import { GameDataService } from '../../../../app/services/game-data.service';
import { playerInfoInterface } from 'src/config/interfaces/player.interface';
import { GAMEMODE } from '../../../../config/enums/game.enum';
import { of } from 'rxjs';

describe('UserLogoComponent', () => {
  let component: UserLogoComponent;
  let fixture: ComponentFixture<UserLogoComponent>;
  let gameDataService: GameDataService = new GameDataService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.inject(GameDataService);
    fixture = TestBed.createComponent(UserLogoComponent);
    component = fixture.componentInstance;
    component.displayUserName = true;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have displayUserName', () => {
    expect(component.displayUserName).toEqual(true);
  });

  // Testing onDisplayUserName()
  test('should change displayUserMenu', () => {
    component.displayUserMenu = false;
    component.onDisplayUserMenu();
    expect(component.displayUserMenu).toEqual(true);
  });

  // TODO: Testing the playerInfo$ subscription
  test('should have playerInfo', () => {
    const playerInfo: playerInfoInterface = {
      name: 'Test Name',
      initials: 'TN',
      gameMode: GAMEMODE.NONE,
      selected: false,
      selectedNumber: 0,
    };
  });
});
