import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexaButtonComponent } from './hexa-button.component';

describe('HexaButtonComponent', () => {
  let component: HexaButtonComponent;
  let fixture: ComponentFixture<HexaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
