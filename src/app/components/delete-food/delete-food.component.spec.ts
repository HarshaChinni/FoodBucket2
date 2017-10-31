import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodComponent } from './delete-food.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';

describe('DeleteFoodComponent', () => {
  let component: DeleteFoodComponent;
  let fixture: ComponentFixture<DeleteFoodComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [DataService],
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
