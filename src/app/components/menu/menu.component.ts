import { Component, OnInit } from '@angular/core';
import { FoodDetail } from '../../interfaces/food-detail';

import { DataTableModule, SharedModule } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';
import { GrowlModule } from 'primeng/primeng';

import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuData: FoodDetail[];
  public selectedFood: FoodDetail;
  msgs: Message[] = [];
  growlTimeout = 2000;

  constructor(public dataService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.dataService.getFood()
      .subscribe(
      (foodlist) => {
        this.menuData = foodlist;
        console.log(foodlist);
      });
  }
  addFood(event) {
    // console.log(event.data);
    const obj: FoodDetail = {
      name: event.data.name,
      Description: event.data.Description,
      Price: event.data.Price
    };
    console.log(obj);
    this.cartService.onUpdate(obj);
    this.growling(obj.name);
  }
  growling(name) {
    this.msgs.push({ severity: 'success', summary: 'Added to Cart', detail: name + ' is added to cart' });
  }
}
