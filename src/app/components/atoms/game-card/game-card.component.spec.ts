import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    component.innerText = 'header-test';
    component.footerText = 'footer-test';
    component.selected = true;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing the @Input()s
  test('should have innerText', () => {
    expect(component.innerText).toEqual('header-test');
  });

  test('should have footerText', () => {
    expect(component.footerText).toEqual('footer-test');
  });

  test('should have selected', () => {
    expect(component.selected).toEqual(true);
  });

  // Testing OnInit
  test('should set tooltip text to Seleccionar #', () => {
    component.innerText = '1';
    component.ngOnInit();
    expect(component.tooltip).toEqual('Seleccionar 1');
  });

  test('should set tooltip text to Pasar', () => {
    component.innerText = '☕️';
    component.ngOnInit();
    expect(component.tooltip).toEqual('Pasar');
  });

  test('should set tooltip text to Selección aleatoria', () => {
    component.innerText = '?';
    component.ngOnInit();
    expect(component.tooltip).toEqual('Selección aleatoria');
  });
});
