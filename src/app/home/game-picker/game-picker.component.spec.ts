import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePickerComponent } from './game-picker.component';

describe('GamePickerComponent', () => {
  let component: GamePickerComponent;
  let fixture: ComponentFixture<GamePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
