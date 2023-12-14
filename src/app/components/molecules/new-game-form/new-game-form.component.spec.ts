import { TestBed, waitForAsync } from '@angular/core/testing';
import { NewGameFormComponent } from './new-game-form.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { GameViewComponent } from 'src/app/pages/game-view/game-view.component';

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

  it('should emit game name', () => {
    const fixture = TestBed.createComponent(NewGameFormComponent);
    const component = fixture.debugElement.componentInstance;
    const gameName = 'test';

    spyOn(component.gameName, 'emit');

    component.gameNameControl.setValue(gameName);
    component.onCreateGame(new Event('submit'));

    expect(component.gameName.emit).toHaveBeenCalledWith(gameName);
  });

  it('should validate accurate game name', () => {
    const fixture = TestBed.createComponent(NewGameFormComponent);
    const component = fixture.debugElement.componentInstance;

    component.gameNameControl.setValue('test123');

    expect(component.gameNameControl.valid).toBeTrue();
  });

  it('should validate inaccurate game name', () => {
    const fixture = TestBed.createComponent(NewGameFormComponent);
    const component = fixture.debugElement.componentInstance;

    component.gameNameControl.setValue('test#123');

    expect(component.gameNameControl.valid).toBeFalsy();
  });

  it('should navigate to game view', () => {
    const fixture = TestBed.createComponent(NewGameFormComponent);
    const component = fixture.debugElement.componentInstance;

    spyOn(router, 'navigate');

    component.onCreateGame(new Event('submit'));

    expect(router.navigate).toHaveBeenCalledWith(['/game']);
  });
});
