/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IpsisComponent } from './ipsis.component';

describe('IpsisComponent', () => {
  let component: IpsisComponent;
  let fixture: ComponentFixture<IpsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
