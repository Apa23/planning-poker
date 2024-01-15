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

  test('should set game mode to Espectador', () => {
    const spy1 = jest.spyOn(component, 'onChangeGameMode');
    const spy2 = jest
      .spyOn(component['gameDataService'], 'getPlayerInfo')
      .mockReturnValue({
        name: 'Test Name',
        initials: 'TN',
        selected: false,
        selectedNumber: null,
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        login: true,
      });
    const spy3 = jest.spyOn(component['gameDataService'], 'setPlayerInfo');
    component.onChangeGameMode();
    expect(spy1).toHaveBeenCalled();

    if (spy2.mock.results[0].value.gameMode === 'jugador') {
      expect(spy3).toHaveBeenCalledWith({
        name: 'Test Name',
        initials: 'TN',
        selected: false,
        selectedNumber: null,
        gameMode: 'espectador',
        host: false,
        login: true,
      });
    } else {
      expect(spy3).toHaveBeenCalledWith({
        name: 'Test Name',
        initials: 'TN',
        selected: false,
        selectedNumber: null,
        gameMode: 'jugador',
        host: false,
      });
    }
  });

  test('should set game mode to Jugador', () => {
    const spy1 = jest.spyOn(component, 'onChangeGameMode');
    const spy2 = jest
      .spyOn(component['gameDataService'], 'getPlayerInfo')
      .mockReturnValue({
        name: 'Test Name',
        initials: 'TN',
        selected: false,
        selectedNumber: null,
        gameMode: GAMEMODE.ESPECTADOR,
        host: false,
        login: true,
      });
    const spy3 = jest.spyOn(component['gameDataService'], 'setPlayerInfo');
    component.onChangeGameMode();
    expect(spy1).toHaveBeenCalled();

    if (spy2.mock.results[0].value.gameMode === 'jugador') {
      expect(spy3).toHaveBeenCalledWith({
        name: 'Test Name',
        initials: 'TN',
        selected: false,
        selectedNumber: null,
        gameMode: 'espectador',
        host: false,
      });
    } else {
      expect(spy3).toHaveBeenCalledWith({
        name: 'Test Name',
        initials: 'TN',
        selected: false,
        selectedNumber: null,
        gameMode: 'jugador',
        host: false,
        login: true,
      });
    }
  });

  // Testing onExitGame()
  test('should call set default values and navigate to home', () => {
    const spy1 = jest.spyOn(component['gameDataService'], 'setGameInfo').mockImplementation();
    const spy2 = jest.spyOn(component['gameDataService'], 'setPlayerInfo').mockImplementation();
    const spy3 = jest.spyOn(component['router'], 'navigate').mockImplementation();
    component.onExitGame();
    expect(spy1).toHaveBeenCalledWith({
      displayInviteModal: false,
      cardMode: CARDMODE.NONE,
    });
    expect(spy2).toHaveBeenCalledWith({
      name: '',
      initials: '',
      selected: false,
      selectedNumber: null,
      gameMode: GAMEMODE.NONE,
      host: false,
      login: false,
    });
    expect(spy3).toHaveBeenCalledWith(['/']);
  });
});
