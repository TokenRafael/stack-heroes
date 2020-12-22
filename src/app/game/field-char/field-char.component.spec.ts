import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCharComponent } from './field-char.component';

describe('FieldCharComponent', () => {
  let component: FieldCharComponent;
  let fixture: ComponentFixture<FieldCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldCharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
