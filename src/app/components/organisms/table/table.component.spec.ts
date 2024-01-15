import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { GAMEMODE } from '../../../../config/enums/game.enum';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.players = [
      {
        name: 'test1',
        initials: 'T1',
        selected: false,
        gameMode: GAMEMODE.ESPECTADOR,
        selectedNumber: 0,
        host: false,
        login:true
      },
      {
        name: 'test2',
        initials: 'T2',
        selected: false,
        gameMode: GAMEMODE.ESPECTADOR,
        selectedNumber: 0,
        host: false,
        login:true

      },
    ];
    component.displayNewPlayerForm = true;
    component.selectionDone = false;
    component.revealResult = false;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have players', () => {
    const players = [
      {
        name: 'test1',
        initials: 'T1',
        selected: false,
        gameMode: GAMEMODE.ESPECTADOR,
        selectedNumber: 0,
        host: false,
        login: true
      },
      {
        name: 'test2',
        initials: 'T2',
        selected: false,
        gameMode: GAMEMODE.ESPECTADOR,
        selectedNumber: 0,
        host: false,
        login: true

      },
    ];
    expect(component.players).toEqual(players);
  });

  test('should have displayNewPlayerForm', () => {
    expect(component.displayNewPlayerForm).toEqual(true);
  });

  test('should have selectionDone', () => {
    expect(component.selectionDone).toEqual(false);
  });

  test('should have revealResult', () => {
    expect(component.revealResult).toEqual(false);
  });


  // Testing @Output()s

  test('should emit player name who made a selection', () => {
    const spy = jest.spyOn(component.randomSelectionChange, 'emit').mockImplementation();
    component.onRandomSelectionChange('test name');
    expect(spy).toHaveBeenCalledWith('test name');
  });

  test('should emit display result', () =>{
    const spy = jest.spyOn(component.displayResult, 'emit').mockImplementation();
    component.onDisplayResult(new Event('click'));
    expect(spy).toHaveBeenCalled();
  })

  test('should emit new game creation', () =>{
    const spy = jest.spyOn(component.newGame, 'emit').mockImplementation();
    component.onNewGame(new Event('click'));
    expect(spy).toHaveBeenCalled();
  })


});
