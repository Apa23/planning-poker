import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuComponent } from './user-menu.component';
import { CARDMODE, GAMEMODE } from '../../../../config/enums/game.enum';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    component.displayUserMenu = true;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have displayUserMenu', () => {
    expect(component.displayUserMenu).toEqual(true);
  });

  // Testing onDisplayChangeCardMode()

  test('should call onDisplayChangeCardMode()', () => {
    const spy = jest.spyOn(component, 'onDisplayChangeCardMode');
    component.displayChangeCardMode = false;
    component.onDisplayChangeCardMode();
    expect(spy).toHaveBeenCalled();
    expect(component.displayChangeCardMode).toEqual(true);
  });

  // Testing onCardModeChange()

  test('should call onCardModeChange()', () => {
    const spy1 = jest.spyOn(component, 'onCardModeChange');
    const event = {
      target: {
        value: 'Test Value',
      },
    };
    const spy2 = jest.spyOn(component['gameDataService'], 'setGameInfo');
    component.onCardModeChange(event);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({
      displayInviteModal: false,
      cardMode: 'Test Value',
    });
  });

  // Testing onChangeGameMode()

  test('should call onChangeGameMode()', () => {
    const spy1 = jest.spyOn(component, 'onChangeGameMode');
    const spy2 = jest
      .spyOn(component['gameDataService'], 'getPlayerInfo')
      .mockReturnValue({
        name: 'Test Name',
        initials: 'TN',
        selected: false,
        selectedNumber: null,
        gameMode: GAMEMODE.JUGADOR,
      });
    const spy3 = jest.spyOn(component['gameDataService'], 'setPlayerInfo');
    component.onChangeGameMode();
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();

    if (spy2.mock.results[0].value.gameMode === 'jugador') {
      expect(spy3).toHaveBeenCalledWith({
        name: 'Test Name',
        initials: 'TN',
        selected: false,
        selectedNumber: null,
        gameMode: 'espectador',
      });
    } else {
      expect(spy3).toHaveBeenCalledWith({
        name: 'Test Name',
        initials: 'TN',
        selected: false,
        selectedNumber: null,
        gameMode: 'jugador',
      });
    }
  });
});
