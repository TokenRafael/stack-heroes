/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WinScreenComponent } from './win-screen.component';

describe('WinScreenComponent', () => {
  let component: WinScreenComponent;
  let fixture: ComponentFixture<WinScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
