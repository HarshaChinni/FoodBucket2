import { Component, OnInit } from '@angular/core';

import { DataListModule } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';
import { GrowlModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';

import { FoodDetail } from '../../interfaces/food-detail';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart: FoodDetail[];
  public sum = 0;
  public selectedFood: FoodDetail;
  msgs: Message[] = [];
  growlTimeout = 2000;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    for (let i = 0; i < this.cart.length; ++i) {
      this.sum += this.cart[i].Price;
    }
  }
  remove(event) {
    const removeFood: FoodDetail = {
      id: event.data.id,
      menu: event.data.menu,
      name: event.data.name,
      Description: event.data.Description,
      Price: event.data.Price
    };
    for (let i = 0; i < this.cart.length; ++i) {
      if (this.cart[i].id === removeFood.id && this.cart[i].name === removeFood.name) {
        this.sum -= this.cart[i].Price;
        this.cart.splice(i, 1);
        break;
      }
    }
    this.cartService.setCart(this.cart);
    this.growling(removeFood.name);
  }

  growling(name) {
    this.msgs.push({ severity: 'warn', summary: 'Removed from Cart', detail: name + ' is removed from cart' });
  }

  pay() {
    alert('Payment of Rs ' + this.sum + ' Recieved! Thank You.');
  }

}
