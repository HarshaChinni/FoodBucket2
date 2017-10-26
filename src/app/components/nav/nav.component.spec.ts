import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Common } from '../../interfaces/common';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
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
        declarations: [NavComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
