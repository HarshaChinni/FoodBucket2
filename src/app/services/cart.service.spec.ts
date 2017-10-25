import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it(
    'should be created',
    inject([CartService], (service: CartService) => {
      expect(service).toBeTruthy();
    })
  );
});
