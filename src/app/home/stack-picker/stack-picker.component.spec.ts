import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackPickerComponent } from './stack-picker.component';

describe('StackPickerComponent', () => {
  let component: StackPickerComponent;
  let fixture: ComponentFixture<StackPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
