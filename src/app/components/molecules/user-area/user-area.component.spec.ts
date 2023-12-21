import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAreaComponent } from './user-area.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UserAreaComponent', () => {
  let component: UserAreaComponent;
  let fixture: ComponentFixture<UserAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAreaComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(UserAreaComponent);
    component = fixture.componentInstance;
    component.playerInitials = 'An';
    component.displayUserMenu = true;
    component.onDisplayInvitePlayers = (args) => {
      return args + 1;
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
