import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodComponent } from './add-food.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';

describe('Component: Add food to Database', () => {
  let component: AddFoodComponent;
  let fixture: ComponentFixture<AddFoodComponent>;

  const mockRequest = {
    navigate: jasmine.createSpy('RequestOptions')
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [DataService, Http, ConnectionBackend, RequestOptions],
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
