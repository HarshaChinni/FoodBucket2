import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodComponent } from './add-food.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Common } from '../../interfaces/common';

describe('Component: Add food to Database', () => {
  let component: AddFoodComponent;
  let fixture: ComponentFixture<AddFoodComponent>;

  const mockRequest = {
    navigate: jasmine.createSpy('RequestOptions')
  };
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [
          DataService,
          Http,
          ConnectionBackend,
          Common,
          { provide: RequestOptions, useValue: mockRequest },
          { provide: Router, useValue: mockRouter }
        ],
        declarations: [AddFoodComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
