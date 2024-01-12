import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.id = 'test';
    component.text = 'test';
    component.type = 'filled';
    component.disabled = false;
    component.location = 'middle table';
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have id', () => {
    expect(component.id).toEqual('test');
  });

  test('should have text', () => {
    expect(component.text).toEqual('test');
  });

  test('should have type', () => {
    expect(component.type).toEqual('filled');
  });

  test('should have disabled', () => {
    expect(component.disabled).toEqual(false);
  });

  test('should have location', () => {
    expect(component.location).toEqual('middle table');
  });

  // Testing @Output() click

  test('should emit click', () => {
    const spy = jest.spyOn(component.click, 'emit').mockImplementation();
    component.onClick(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });
});
