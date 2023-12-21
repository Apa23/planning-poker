import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    component.src = 'src-test';
    component.alt = 'alt-test';
    component.title = 'title-test';
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s

  test('should have src', () => {
    expect(component.src).toEqual('src-test');
  });

  test('should have alt', () => {
    expect(component.alt).toEqual('alt-test');
  });

  test('should have title', () => {
    expect(component.title).toEqual('title-test');
  });
});
