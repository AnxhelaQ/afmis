/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EamisComponent } from './eamis.component';

describe('EamisComponent', () => {
  let component: EamisComponent;
  let fixture: ComponentFixture<EamisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EamisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EamisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
