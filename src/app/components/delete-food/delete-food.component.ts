import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';
import { GrowlModule } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { FoodDetail } from '../../interfaces/food-detail';

@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.css']
})
export class DeleteFoodComponent implements OnInit {

  menus: SelectItem[];

  selectedMenu: string;
  selectedFood: FoodDetail;
  public menuData: FoodDetail[];

  msgs: Message[] = [];
  growlTimeout = 2000;

  constructor(public dataServices: DataService, private confirmationService: ConfirmationService) {
    this.menus = [];
    this.menus.push({ label: 'Breakfast', value: 'breakfast' });
    this.menus.push({ label: 'Lunch', value: 'lunch' });
    this.menus.push({ label: 'Snacks', value: 'snacks' });
    this.menus.push({ label: 'Tea', value: 'tea' });
    this.menus.push({ label: 'Dinner', value: 'dinner' });
  }

  ngOnInit() {
  }

  selectMenu(event) {
    this.dataServices.setCurrentMenu(event.value);
    this.dataServices.getFood()
      .subscribe(
      (foodlist) => {
        this.menuData = foodlist;
      });
  }
  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        alert('hit');
      }
    });
  }
  delFood(event) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete ' + event.data.name + ' ?',
      accept: () => {
        if (this.dataServices.deleteFood(event.data.id)) {
          this.msgs.push({ severity: 'success', summary: 'Deleted from Database', detail: event.data.name + ' is deleted from Database' });
        } else {
          this.msgs.push({ severity: 'error', summary: 'Unable to Delete', detail: event.data.name + ' is Unable to delete' });
        }
      }
    });
  }
}
