import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NewPlayerFormComponent } from './new-player-form.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateGameComponent } from '../../../../app/pages/create-game/create-game.component';

describe('NewPlayerFormComponent', () => {
  let router: Router;
  let component: NewPlayerFormComponent;
  let fixture: ComponentFixture<NewPlayerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPlayerFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: CreateGameComponent },
        ]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
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

  // Testing the onChangeGameMode() method
  test('should call onChangeGameMode()', () => {
    const spy = jest.spyOn(component.newPlayerForm, 'patchValue');
    component.onChangeGameMode({ target: { value: 'Jugador' } });
    expect(spy).toHaveBeenCalled();
  });

  // Testing the onCancel() method
  test('should call onCancel()', () => {
    const spy = jest.spyOn(router, 'navigate').mockImplementation();
    component.onCancel();
    expect(spy).toHaveBeenCalledWith(['/']);
  });
});
