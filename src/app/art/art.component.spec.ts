/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtComponent } from './art.component';

describe('ArtComponent', () => {
  let component: ArtComponent;
  let fixture: ComponentFixture<ArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
