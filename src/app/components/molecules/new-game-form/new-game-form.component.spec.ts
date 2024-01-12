import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NewGameFormComponent } from './new-game-form.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { GameViewComponent } from '../../../pages/game-view/game-view.component';

describe('NewGameFormComponent', () => {
  let router: Router;
  let component: NewGameFormComponent;
  let fixture: ComponentFixture<NewGameFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewGameFormComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'game', component: GameViewComponent },
        ]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(NewGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing onCreateGame() and Output() gameName

  test('should emit gameName', () => {
    const spy1 = jest.spyOn(component.gameName, 'emit').mockImplementation();
    const spy2 = jest.spyOn(router, 'navigate').mockImplementation();
    component.gameNameControl.setValue('Test Name');
    component.onCreateGame();
    expect(spy1).toHaveBeenCalledWith('Test Name');
    expect(spy2).toHaveBeenCalledWith(['/game']);
  });

  test('should emit void string', () => {
    const spy1 = jest.spyOn(component.gameName, 'emit').mockImplementation();
    const spy2 = jest.spyOn(router, 'navigate').mockImplementation();
    component.gameNameControl.setValue(null);
    component.onCreateGame();
    expect(spy1).toHaveBeenCalledWith('');
    expect(spy2).toHaveBeenCalledWith(['/game']);
  });


});
