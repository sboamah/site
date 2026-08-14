/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SustainableCepComponent } from './sustainable-cep.component';

describe('SustainableCepComponent', () => {
  let component: SustainableCepComponent;
  let fixture: ComponentFixture<SustainableCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustainableCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainableCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
