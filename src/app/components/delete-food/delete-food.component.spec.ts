import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodComponent } from './delete-food.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Common } from '../../interfaces/common';
import { ConfirmationService } from 'primeng/primeng';

describe('DeleteFoodComponent', () => {
  let component: DeleteFoodComponent;
  let fixture: ComponentFixture<DeleteFoodComponent>;
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
          ConfirmationService,
          Common,
          { provide: RequestOptions, useValue: mockRequest },
          { provide: Router, useValue: mockRouter }
        ],
        declarations: [DeleteFoodComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
