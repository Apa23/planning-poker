import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAreaComponent } from './user-area.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CARDMODE } from '../../../../config/enums/game.enum';

describe('UserAreaComponent', () => {
  let component: UserAreaComponent;
  let fixture: ComponentFixture<UserAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAreaComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAreaComponent);
    component = fixture.componentInstance;
    component.displayUserMenu = true;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have displayUserMenu', () => {
    expect(component.displayUserMenu).toEqual(true);
  });

  // Testing onDisplayUserMenu()

  test('should call onDisplayUserMenu()', () => {
    const spy = jest.spyOn(component, 'onDisplayUserMenu');
    component.displayUserMenu = false;
    component.onDisplayUserMenu();
    expect(spy).toHaveBeenCalled();
    expect(component.displayUserMenu).toEqual(true);
  });

  // Testing onDisplayInvitePlayerModal()

  test('should call onDisplayInvitePlayerModal()', () => {
    const spy1 = jest.spyOn(component, 'onDisplayInvitePlayerModal');
    const spy2 = jest
      .spyOn(component['gameDataService'], 'getGameInfo')
      .mockReturnValue({
        cardMode: CARDMODE.FIBONACCI,
        displayInviteModal: false,
      });
    const spy3 = jest.spyOn(component['gameDataService'], 'setGameInfo');
    component.onDisplayInvitePlayerModal();
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
    expect(spy3).toHaveBeenCalledWith({
      cardMode: CARDMODE.FIBONACCI,
      displayInviteModal: true,
    });
  });
});
