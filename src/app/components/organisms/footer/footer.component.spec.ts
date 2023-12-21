import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.displayNewPlayerForm = true;
    component.revealResult = false;
    component.gameMode = 'jugador';
    component.playerSelection = 1;
    component.selectionCards = [1, 2, 3];
    component.occurrences = { 1: 1, 2: 1, 3: 1 };
    component.avarage = 1;
    component.onSelectionChange = (num: string | number) => {
      return num;
    };
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have displayNewPlayerForm', () => {
    expect(component.displayNewPlayerForm).toEqual(true);
  });

  test('should have revealResult', () => {
    expect(component.revealResult).toEqual(false);
  });

  test('should have gameMode', () => {
    expect(component.gameMode).toEqual('jugador');
  });

  test('should have playerSelection', () => {
    expect(component.playerSelection).toEqual(1);
  });

  test('should have selectionCards', () => {
    expect(component.selectionCards).toEqual([1, 2, 3]);
  });

  test('should have occurrences', () => {
    expect(component.occurrences).toEqual({ 1: 1, 2: 1, 3: 1 });
  });

  test('should have avarage', () => {
    expect(component.avarage).toEqual(1);
  });

  test('should have onSelectionChange', () => {
    expect(component.onSelectionChange).toBeTruthy();
  });

  // Testing onSelectionChange()

  test('should call onSelectionChange()', () => {
    if (component.onSelectionChange) {
      const spy = jest.spyOn(component, 'onSelectionChange');
      component.onSelectionChange(1);
      expect(spy).toHaveBeenCalled();
      expect(component.onSelectionChange(1)).toEqual(1);
    }
  });
});
