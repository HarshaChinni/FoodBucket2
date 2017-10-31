import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Common } from '../../interfaces/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

xdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
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
          CartService,
          Http,
          ConnectionBackend,
          Common,
          { provide: RequestOptions, useValue: mockRequest },
          { provide: Router, useValue: mockRouter }
        ],
        declarations: [MenuComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
