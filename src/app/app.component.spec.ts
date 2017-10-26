import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartService } from './services/cart.service';
import { Auth0Service } from './services/auth0.service';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Common } from './interfaces/common';

describe('AppComponent', () => {
  const app = new AppComponent(null, null);
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
          CartService,
          DataService,
          Auth0Service,
          Http,
          ConnectionBackend,
          Common,
          { provide: RequestOptions, useValue: mockRequest },
          { provide: Router, useValue: mockRouter }
        ],
        declarations: [AppComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const application = fixture.debugElement.componentInstance;
      expect(application).toBeTruthy();
    })
  );
  it(
    `should have as title 'Food Bucket`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      expect(app.title).toEqual('Food Bucket');
    })
  );
});
