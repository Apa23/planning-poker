import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogoComponent } from './user-logo.component';
import { GameDataService } from '../../../../app/services/game-data.service';
import { playerInfoInterface } from 'src/config/interfaces/player.interface';
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

  // TODO: Testing the playerInfo$ subscription
  test('should have playerInfo', () => {
    const playerInfo: playerInfoInterface = {
      name: 'Test Name',
      initials: 'TN',
      gameMode: GAMEMODE.NONE,
      selected: false,
      selectedNumber: 0,
    };
    const spy2 = jest.spyOn(
      component['gameDataService'].playerInfo$,
      'subscribe'
    );
    component['gameDataService'].setPlayerInfo(playerInfo);
    expect(component.playerInitials).toEqual('TN');
    expect(component.playerName).toEqual('Test Name');
  });
});
