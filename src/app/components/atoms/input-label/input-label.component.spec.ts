import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLabelComponent } from './input-label.component';

describe('InputLabelComponent', () => {
  let component: InputLabelComponent;
  let fixture: ComponentFixture<InputLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLabelComponent);
    component = fixture.componentInstance;
    component.text = 'text-test';
    component.for = 'for-test';
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have text', () => {
    expect(component.text).toEqual('text-test');
  });

  test('should have for', () => {
    expect(component.for).toEqual('for-test');
  });
});
