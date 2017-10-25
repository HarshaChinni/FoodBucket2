import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Http, ConnectionBackend } from '@angular/http';

describe('Service: DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, Http, ConnectionBackend],
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
