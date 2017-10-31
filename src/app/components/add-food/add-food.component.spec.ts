import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodComponent } from './add-food.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

describe('Component: Add food', () => {
  let component: AddFoodComponent;
  let fixture: ComponentFixture<AddFoodComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  const mockRequest = {
    navigate: jasmine.createSpy('RequestOptions')
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [
          DataService,
          Http,
          ConnectionBackend,
          Router,
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
