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
    component.onClose = (num) => {
      return num + 1;
    };
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

  test('should have onClose', () => {
    expect(component.onClose).toBeTruthy();
  });

  // Testing onClose()

  test('should call onClose()', () => {
    if (component.onClose) {
      const spy = jest.spyOn(component, 'onClose');
      component.onClose(1);
      expect(spy).toHaveBeenCalled();
      expect(component.onClose(1)).toEqual(2);
    }
  });
});
