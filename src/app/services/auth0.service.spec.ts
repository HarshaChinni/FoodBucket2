import { TestBed, inject } from '@angular/core/testing';

import { Auth0Service } from './auth0.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Common } from '../interfaces/common';

describe('Service: Auth0Service', () => {
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockRequest = {
    navigate: jasmine.createSpy('RequestOptions')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Auth0Service,
        DataService,
        Common,
        Http,
        ConnectionBackend,
        { provide: RequestOptions, useValue: mockRequest },
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it(
    'should be created',
    inject([Auth0Service], (service: Auth0Service) => {
      expect(service).toBeTruthy();
    })
  );
});
