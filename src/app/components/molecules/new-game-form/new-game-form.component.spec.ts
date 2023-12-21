import { TestBed, waitForAsync } from '@angular/core/testing';
import { NewGameFormComponent } from './new-game-form.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { GameViewComponent } from '../../../pages/game-view/game-view.component';

describe('NewGameFormComponent', () => {
  let router: Router;

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

    router = TestBed.inject(Router);
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(NewGameFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
