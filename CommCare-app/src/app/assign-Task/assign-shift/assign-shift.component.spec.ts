/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AssignShiftComponent } from './assign-shift.component';

describe('AssignShiftComponent', () => {
  let component: AssignShiftComponent;
  let fixture: ComponentFixture<AssignShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
