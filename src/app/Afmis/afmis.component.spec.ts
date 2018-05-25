/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AfmisComponent } from './afmis.component';

describe('AfmisComponent', () => {
  let component: AfmisComponent;
  let fixture: ComponentFixture<AfmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

