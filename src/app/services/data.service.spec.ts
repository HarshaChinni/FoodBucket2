import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Common } from '../interfaces/common';
import { Router } from '@angular/router';

describe('Service: DataService', () => {
  const mockRequest = {
    navigate: jasmine.createSpy('RequestOptions')
  };
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        Http,
        ConnectionBackend,
        Common,
        { provide: RequestOptions, useValue: mockRequest },
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it(
    'should be created',
    inject([DataService], (service: DataService) => {
      expect(service).toBeTruthy();
    })
  );
});
