import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Auth0Service } from './auth0.service';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Common } from '../interfaces/common';

describe('AuthGuard', () => {
  const mockRequest = {
    navigate: jasmine.createSpy('RequestOptions')
  };
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        Auth0Service,
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
    'should ...',
    inject([AuthGuard], (guard: AuthGuard) => {
      expect(guard).toBeTruthy();
    })
  );
});
