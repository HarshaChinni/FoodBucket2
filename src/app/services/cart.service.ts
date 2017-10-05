import { Injectable } from '@angular/core';
import { FoodDetail } from '../interfaces/food-detail';

@Injectable()
export class CartService {
  cartData: FoodDetail[] = [];
  cartCount = 0;

  constructor() { }

  onUpdate(incoming: FoodDetail) {
    this.cartData.push(incoming);
    this.cartCount = this.cartData.length;
  }
  getCart() {
    return this.cartData;
  }
  setCart(cartData: FoodDetail[]) {
    this.cartData = cartData;
    this.cartCount = this.cartData.length;
  }
}
