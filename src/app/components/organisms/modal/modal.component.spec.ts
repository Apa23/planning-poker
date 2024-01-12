import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.header = true;
    component.type = 'test';
    component.size = 'md';
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have header', () => {
    expect(component.header).toEqual(true);
  });

  test('should have type', () => {
    expect(component.type).toEqual('test');
  });

  test('should have size', () => {
    expect(component.size).toEqual('md');
  });

  // Testing @Output()s

  test('should emit close', () => {
    const spy = jest.spyOn(component.close, 'emit');
    component.onClose();
    expect(spy).toHaveBeenCalled();
  });

});
