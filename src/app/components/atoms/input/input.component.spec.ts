import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormControl } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.type = 'text';
    component.placeholder = 'placeholder-test';
    component.id = 'input-test';
    component.name = 'name-test';
    component.value = 'value-test';
    component.readonly = true;
    component.formControlObject = new FormControl();
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s
  test('should have type', () => {
    expect(component.type).toEqual('text');
  });

  test('should have placeholder', () => {
    expect(component.placeholder).toEqual('placeholder-test');
  });

  test('should have id', () => {
    expect(component.id).toEqual('input-test');
  });

  test('should have name', () => {
    expect(component.name).toEqual('name-test');
  });

  test('should have value', () => {
    expect(component.value).toEqual('value-test');
  });

  test('should have readonly', () => {
    expect(component.readonly).toEqual(true);
  });

  test('should have formControlObject', () => {
    expect(component.formControlObject).toBeTruthy();
  });
});
