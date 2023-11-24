/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaunchHobokenComponent } from './launch-hoboken.component';

describe('LaunchHobokenComponent', () => {
  let component: LaunchHobokenComponent;
  let fixture: ComponentFixture<LaunchHobokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchHobokenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchHobokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
