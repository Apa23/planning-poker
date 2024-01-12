import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameComponent } from './create-game.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CreateGameComponent', () => {
  let component: CreateGameComponent;
  let fixture: ComponentFixture<CreateGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateGameComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing onCreateGame()

  test('should set gameName', () => {
    const spy1 = jest.spyOn(component['gameDataService'], 'setGameName');
    component.onCreateGame('test');
    expect(spy1).toHaveBeenCalled();
    expect(component.gameName).toBe('test');
  });
});
