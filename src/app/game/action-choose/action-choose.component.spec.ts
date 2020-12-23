import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionChooseComponent } from './action-choose.component';

describe('ActionChooseComponent', () => {
  let component: ActionChooseComponent;
  let fixture: ComponentFixture<ActionChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
