import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardComponent } from './player-card.component';
import { GAMEMODE } from '../../../../config/enums/game.enum';

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    component.name = 'Test Name';
    component.initials = 'TN';
    component.selected = true;
    component.selectedNumber = 1;
    component.gameMode = GAMEMODE.JUGADOR;
    component.onSelectionChange = (name: string) => {
      return 'This is your name:' + name;
    };
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have name', () => {
    expect(component.name).toEqual('Test Name');
  });

  test('should have initials', () => {
    expect(component.initials).toEqual('TN');
  });

  test('should have selected', () => {
    expect(component.selected).toEqual(true);
  });

  test('should have selectedNumber', () => {
    expect(component.selectedNumber).toEqual(1);
  });

  test('should have gameMode', () => {
    expect(component.gameMode).toEqual(GAMEMODE.JUGADOR);
  });

  // Testing onSelectionChange()

  test('should call onSelectionChange()', () => {
    if (component.onSelectionChange) {
      const spy = jest.spyOn(component, 'onSelectionChange');
      component.onSelectionChange('Test Name');
      expect(spy).toHaveBeenCalled();
      expect(component.onSelectionChange('Test Name')).toEqual(
        'This is your name:' + 'Test Name'
      );
    }
  });
});
