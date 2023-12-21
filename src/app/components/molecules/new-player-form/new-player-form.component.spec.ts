import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayerFormComponent } from './new-player-form.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('NewPlayerFormComponent', () => {
  let component: NewPlayerFormComponent;
  let fixture: ComponentFixture<NewPlayerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPlayerFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the onCreatePlayer() method

  test('should call onCreatePlayer()', () => {
    const spy = jest.spyOn(component, 'onCreatePlayer');
    component.onCreatePlayer();
    expect(spy).toHaveBeenCalled();
  });

  test('should call setPlayerInfo()', () => {
    const spy = jest.spyOn(component['gameDataService'], 'setPlayerInfo');
    component.onCreatePlayer();
    expect(spy).toHaveBeenCalled();
  });
});
