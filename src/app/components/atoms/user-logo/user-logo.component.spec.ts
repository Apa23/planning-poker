import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogoComponent } from './user-logo.component';
import { PlayerInfoInterface } from 'src/config/interfaces/player.interface';
import { GAMEMODE } from '../../../../config/enums/game.enum';

describe('UserLogoComponent', () => {
  let component: UserLogoComponent;
  let fixture: ComponentFixture<UserLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
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

  // Testing the playerInfo$ subscription
  test('should have playerInfo', () => {
    const playerInfo: PlayerInfoInterface = {
      name: 'Test Name',
      initials: 'TN',
      gameMode: GAMEMODE.NONE,
      selected: false,
      selectedNumber: 0,
      host: false,
      login: false,
    };
    component['gameDataService'].setPlayerInfo(playerInfo);
    expect(component.playerInitials).toEqual('TN');
    expect(component.playerName).toEqual('Test Name');
  });
});
