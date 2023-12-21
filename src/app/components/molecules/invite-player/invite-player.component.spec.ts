import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePlayerComponent } from './invite-player.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: async () => {},
  },
});

describe('InvitePlayerComponent', () => {
  let component: InvitePlayerComponent;
  let fixture: ComponentFixture<InvitePlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvitePlayerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the onCopyLink() method

  test('should copy the invitation link to the clipboard', () => {
    const spy = jest.spyOn(navigator.clipboard, 'writeText');
    component.onCopyLink();
    expect(spy).toHaveBeenCalledWith(component.invitationLink);
  });
});
