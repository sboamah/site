/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PathPioneerComponent } from './path-pioneer.component';

describe('PathPioneerComponent', () => {
  let component: PathPioneerComponent;
  let fixture: ComponentFixture<PathPioneerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathPioneerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathPioneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
