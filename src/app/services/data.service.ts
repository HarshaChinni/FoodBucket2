import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/RX';
import { Common } from '../interfaces/common';
import { FoodDetail } from '../interfaces/food-detail';
import { CartDetail } from '../interfaces/cart-detail';
import { Router } from '@angular/router';
@Injectable()
export class DataService {
  currentMenu = 'breakfast';

  constructor(
    public http: Http,
    private router: Router,
    private common: Common
  ) {}

  setCurrentMenu(selectMenu) {
    this.currentMenu = selectMenu;
  }

  getFood() {
    return this.http
      .get(this.common.appUrl + this.currentMenu)
      .map(res => res.json());
  }

  postFood(target: string, obj: FoodDetail) {
    return this.http.post(this.common.appUrl + target, obj).subscribe(res => {
      return true;
    });
  }

  deleteFood(targetId: number) {
    return this.http
      .delete(this.common.appUrl + this.currentMenu + '/' + targetId)
      .subscribe(res => {
        return true;
      });
  }

  postSale(sales: CartDetail) {
    return this.http.post(this.common.appUrl + '/sales', sales);
  }

  getSale() {
    return this.http.get(this.common.appUrl + '/sales').map(res => res.json());
  }

  getUser() {
    return this.http
      .get('https://redvirus.auth0.com/userinfo')
      .map(res => res.json());
  }
}
