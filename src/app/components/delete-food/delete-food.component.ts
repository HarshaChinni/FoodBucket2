import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';
import { GrowlModule } from 'primeng/primeng';

import { FoodDetail } from '../../interfaces/food-detail';

@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.css']
})
export class DeleteFoodComponent implements OnInit {

  menus: SelectItem[];

  selectedMenu: string;
  name: string;
  price: number;
  description: string;
  msgs: Message[] = [];
  growlTimeout = 2000;

  constructor(private dataServices: DataService) {
    this.menus = [];
    this.menus.push({ label: 'Select Menu', value: null });
    this.menus.push({ label: 'Breakfast', value: 'breakfast' });
    this.menus.push({ label: 'Lunch', value: 'lunch' });
    this.menus.push({ label: 'Snacks', value: 'snacks' });
    this.menus.push({ label: 'Tea', value: 'tea' });
    this.menus.push({ label: 'Dinner', value: 'dinner' });
  }

  ngOnInit() {
  }

  addFood() {
    const obj: FoodDetail = {
      id: null,
      name: this.name,
      Description: this.description,
      Price: this.price
    };
    if (this.dataServices.postFood(this.selectedMenu, obj)) {
      this.msgs.push({ severity: 'success', summary: 'Added to Database', detail: name + ' is added to Database' });
    }

  }

}
