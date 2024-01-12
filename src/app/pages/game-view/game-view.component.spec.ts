import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameViewComponent } from './game-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CARDMODE, GAMEMODE } from '../../../config/enums/game.enum';
import {
  EXTRA_SELECTION_CARDS,
  FIBONACCI,
  SEQUENCE,
} from '../../../config/data/game.constant';
import {
  gameInfoInterface,
  playerInfoInterface,
} from '../../../config/interfaces/player.interface';

describe('GameViewComponent', () => {
  let component: GameViewComponent;
  let fixture: ComponentFixture<GameViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameViewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the playerInfo$ subscription
  test('should have playerInfo', () => {
    const playerInfo: playerInfoInterface = {
      name: 'Test Name',
      initials: 'TN',
      gameMode: GAMEMODE.NONE,
      selected: false,
      selectedNumber: 0,
      host: false,
    };
    const spy1 = jest.spyOn(component, 'onCreatePlayer').mockImplementation();
    component['gameDataService'].setPlayerInfo(playerInfo);
    expect(spy1).toHaveBeenCalledWith(playerInfo);
  });

  // Testing the gameInfo$ subscription
  test('should have gameMode', () => {
    const gameInfo: gameInfoInterface = {
      cardMode: CARDMODE.FIBONACCI,
      displayInviteModal: true,
    };
    const spy1 = jest.spyOn(component, 'onCardModeChange').mockImplementation();

    component['gameDataService'].setGameInfo(gameInfo);
    expect(spy1).toHaveBeenCalledWith(gameInfo.cardMode);
  });

  test('should have display invitation', () => {
    const gameInfo: gameInfoInterface = {
      cardMode: CARDMODE.FIBONACCI,
      displayInviteModal: true,
    };
    const spy1 = jest
      .spyOn(component, 'onDisplayInvitePlayers')
      .mockImplementation();

    component['gameDataService'].setGameInfo(gameInfo);
    expect(spy1).toHaveBeenCalled();
  });

  // Testing onDisplayNewPlayerForm method
  test('should set displayNewPlayerForm to true', () => {
    component.displayNewPlayerForm = false;
    component.onDisplayNewPlayerForm();
    expect(component.displayNewPlayerForm).toBe(true);
  });

  // Testing onDisplayInvitePlayers method
  test('should set displayInvitePlayers to true', () => {
    component.displayInvitePlayers = false;
    component.onDisplayInvitePlayers();
    expect(component.displayInvitePlayers).toBe(true);
  });

  // Testing onChangeGameMode method
  test('should set game mode to Jugador', () => {
    component.gameMode = GAMEMODE.ESPECTADOR;
    component.onChangeGameMode();
    expect(component.gameMode).toBe(GAMEMODE.JUGADOR);
  });

  test('should set game mode to Espectador', () => {
    component.gameMode = GAMEMODE.JUGADOR;
    component.onChangeGameMode();
    expect(component.gameMode).toBe(GAMEMODE.ESPECTADOR);
  });

  // Testing onCardModeChange method
  test('should not chage card mode if it is the current mode ', () => {
    component.cardMode = '1';
    component.onCardModeChange('1');
    expect(component.cardMode).toBe('1');
  });

  test('should not chage card mode if it is empty ', () => {
    component.cardMode = '1';
    component.onCardModeChange('');
    expect(component.cardMode).toBe('1');
  });

  test('should set card mode to random', () => {
    component.cardMode = 'any';
    component.cardsList = [];
    component.selectionCards = [];
    const spy = jest.spyOn(component, 'resetSelections').mockImplementation();
    component.onCardModeChange('random');
    expect(component.cardMode).toBe('random');
    expect(component.cardsList.length).toBe(11);
    expect(component.selectionCards.length).toBe(13);
    expect(spy).toHaveBeenCalled();
  });

  test('should set card mode to sequence', () => {
    component.cardMode = 'any';
    component.cardsList = [];
    component.selectionCards = [];
    const spy = jest.spyOn(component, 'resetSelections').mockImplementation();
    component.onCardModeChange('sequence');
    expect(component.cardMode).toBe('sequence');
    expect(component.cardsList).toBe(SEQUENCE);
    expect(component.selectionCards).toEqual([
      ...SEQUENCE,
      ...EXTRA_SELECTION_CARDS,
    ]);
    expect(spy).toHaveBeenCalled();
  });

  test('should set card mode to fibonacci', () => {
    component.cardMode = 'any';
    component.cardsList = [];
    component.selectionCards = [];
    const spy = jest.spyOn(component, 'resetSelections').mockImplementation();
    component.onCardModeChange('fibonacci');
    expect(component.cardMode).toBe('fibonacci');
    expect(component.cardsList).toBe(FIBONACCI);
    expect(component.selectionCards).toEqual([
      ...FIBONACCI,
      ...EXTRA_SELECTION_CARDS,
    ]);
    expect(spy).toHaveBeenCalled();
  });

  // Testing onCreatePlayer method
  test('should add a new player to the players array', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: false,
        selectedNumber: null,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];

    const spy = jest
      .spyOn(component, 'onDisplayNewPlayerForm')
      .mockImplementation();

    component.onCreatePlayer({
      gameMode: GAMEMODE.JUGADOR,
      host: false,
      initials: 'T4',
      name: 'Test 4',
      selected: false,
      selectedNumber: null,
    });
    expect(component.players.length).toBe(4);
    expect(component.playerName).toBe('Test 4');
    expect(component.playerInitials).toBe('T4');
    expect(component.gameMode).toBe(GAMEMODE.JUGADOR);
    expect(spy).toHaveBeenCalled();
  });

  test('should not add player if the player already exist', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: false,
        selectedNumber: null,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];

    component.onCreatePlayer({
      gameMode: GAMEMODE.JUGADOR,
      host: false,
      initials: 'T1',
      name: 'Test 1',
      selected: true,
      selectedNumber: 1,
    });
    expect(component.players.length).toBe(3);
    expect(component.playerName).toBe('Test 1');
    expect(component.playerInitials).toBe('T1');
    expect(component.gameMode).toBe(GAMEMODE.JUGADOR);
  });

  // Testing onSelectionChange method
  test('should set playerSelection to a random number', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: false,
        selectedNumber: null,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];
    component.onSelectionChange('?');
    expect(component.playerSelection).toBe('?');
    expect(component.players[1].selected).toBeTruthy();
    expect(component.players[1].selectedNumber).not.toBe(null);
  });

  test('should set playerSelection to selected number', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: false,
        selectedNumber: null,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];
    component.onSelectionChange(2);
    expect(component.playerSelection).toBe(2);
    expect(component.players[1].selected).toBeTruthy();
    expect(component.players[1].selectedNumber).toBe(2);
  });

  test('should set playerSelection to a pass', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: false,
        selectedNumber: null,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];
    component.onSelectionChange('pass');
    expect(component.playerSelection).toBe('pass');
    expect(component.players[1].selected).toBeTruthy();
    expect(component.players[1].selectedNumber).toBe(null);
  });

  test('should unset playerSelection', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: true,
        selectedNumber: 2,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];
    component.playerSelection = 2;
    component.onSelectionChange(2);
    expect(component.playerSelection).toBe(null);
    expect(component.players[1].selected).toBeFalsy();
    expect(component.players[1].selectedNumber).toBe(null);
  });

  // Testing onRandomSelectionChange method
  test('should set a random selection of an especific player and change thier selected to true', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: true,
        selectedNumber: 2,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];
    const spy = jest
      .spyOn(component, 'checkSelectionDone')
      .mockImplementation();
    const playerIndex = component.players.findIndex(
      (player) => player.name === 'Test 3'
    );
    component.onRandomSelectionChange('Test 3');
    expect(component.players[playerIndex].selected).toBeTruthy();
    expect(component.players[playerIndex].selectedNumber).not.toBe(null);
    expect(spy).toHaveBeenCalled();
  });

  test('should set selection of an especific player to 0 and change thier selected to false', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: true,
        selectedNumber: 2,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];
    const spy = jest
      .spyOn(component, 'checkSelectionDone')
      .mockImplementation();
    const playerIndex = component.players.findIndex(
      (player) => player.name === 'Test 1'
    );
    component.onRandomSelectionChange('Test 1');
    expect(component.players[playerIndex].selected).toBeFalsy();
    expect(component.players[playerIndex].selectedNumber).toBe(0);
    expect(spy).toHaveBeenCalled();
  });

  // Testing checkSelectionDone method
  test('should set selectionDone to false if at least a player has not done their selection yet', () => {
    component.selectionDone = true;
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: true,
        selectedNumber: 2,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];
    component.checkSelectionDone();
    expect(component.selectionDone).toBe(false);
  });

  test('should set selectionDone to true if every player has done their selection', () => {
    component.selectionDone = false;
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: true,
        selectedNumber: 2,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: true,
        selectedNumber: 3,
      },
    ];
    component.checkSelectionDone();
    expect(component.selectionDone).toBe(true);
  });

  test('should not count players on Espectador game mode', () => {
    component.selectionDone = false;
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: true,
        selectedNumber: 2,
      },
      {
        gameMode: GAMEMODE.ESPECTADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];
    component.checkSelectionDone();
    expect(component.selectionDone).toBe(true);
  });

  // Testing onDisplayResult method
  test('should calculate avarage an occurences and display that results', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: true,
        selectedNumber: 2,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: true,
        selectedNumber: 3,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ];
    component.onDisplayResult();
    expect(component.playedNumbers).toEqual([1, 2, 3]);
    expect(component.avarage).toBe('2.00');
    expect(component.revealResult).toBeTruthy();
    expect(component.occurrences).toEqual({ 1: 1, 2: 1, 3: 1 });
  });

  // Testing onNewGame method
  test('should set default values to player game info', () => {
    component.playedNumbers = [1, 2, 3];
    component.avarage = 2;
    component.selectionDone = true;
    component.revealResult = true;
    component.playerSelection = 1;
    const spy = jest
      .spyOn(component, 'onRandomSelectionChange')
      .mockImplementation();
    component.onNewGame();
    expect(component.playedNumbers).toStrictEqual([]);
    expect(component.avarage).toBe(0);
    expect(component.selectionDone).toBe(false);
    expect(component.revealResult).toBe(false);
    expect(component.playerSelection).toBe(null);
    expect(spy).toHaveBeenCalled();
  });

  // Testing resetSelections method
  test('should clear selected numbers from the mock players', () => {
    component.players = [
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: true,
        selectedNumber: 1,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: true,
        selectedNumber: 2,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: true,
        selectedNumber: 3,
      },
    ];
    const spy = jest
      .spyOn(component, 'checkSelectionDone')
      .mockImplementation();
    component.resetSelections();
    expect(component.players).toEqual([
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T1',
        name: 'Test 1',
        selected: false,
        selectedNumber: null,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T2',
        name: 'Test 2',
        selected: false,
        selectedNumber: null,
      },
      {
        gameMode: GAMEMODE.JUGADOR,
        host: false,
        initials: 'T3',
        name: 'Test 3',
        selected: false,
        selectedNumber: null,
      },
    ]);
    expect(spy).toHaveBeenCalled();
  });
});
