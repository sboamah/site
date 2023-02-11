/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PurpalComponent } from './purpal.component';

describe('PurpalComponent', () => {
  let component: PurpalComponent;
  let fixture: ComponentFixture<PurpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
