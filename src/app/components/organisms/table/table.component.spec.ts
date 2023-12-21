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
      },
      {
        name: 'test2',
        initials: 'T2',
        selected: false,
        gameMode: GAMEMODE.ESPECTADOR,
        selectedNumber: 0,
      },
    ];
    component.displayNewPlayerForm = true;
    component.selectionDone = false;
    component.revealResult = false;
    component.onRandomSelectionChange = (name) => {
      return 'this is a ' + name + '!';
    };
    component.onDisplayResult = (input) => {
      return 'this is a ' + input + '!';
    };
    component.onNewGame = (input) => {
      return 'this is a ' + input + '!';
    };
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
      },
      {
        name: 'test2',
        initials: 'T2',
        selected: false,
        gameMode: GAMEMODE.ESPECTADOR,
        selectedNumber: 0,
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

  test('should have onRandomSelectionChange', () => {
    if (component.onRandomSelectionChange) {
      expect(component.onRandomSelectionChange('test')).toEqual(
        'this is a test!'
      );
    }
  });

  test('should have onDisplayResult', () => {
    if (component.onDisplayResult) {
      expect(component.onDisplayResult('test')).toEqual('this is a test!');
    }
  });

  test('should have onNewGame', () => {
    if (component.onNewGame) {
      expect(component.onNewGame('test')).toEqual('this is a test!');
    }
  });
});
