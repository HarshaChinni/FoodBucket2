import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { FoodDetail } from '../interfaces/food-detail';

@Injectable()
export class DataService {
  currentMenu = 'breakfast';

  constructor(public http: Http) { }

  setCurrentMenu(selectMenu) {
    this.currentMenu = selectMenu;
  }

  getFood() {
    return (this.http.get('http://192.168.1.2:3000/' + this.currentMenu)
      .map(res => res.json()));
  }

  postFood(target: string, obj: FoodDetail) {
    return (this.http.post('http://192.168.1.2:3000/' + target, obj)
      .subscribe(res => {
        return true;
      }));
  }

  deleteFood(targetId: number) {
    return (this.http.delete('http://192.168.1.2:3000/' + this.currentMenu + '/' + targetId)
      .subscribe(res => {
        return true;
      }));
  }

  getUser() {
    return (this.http.get('https://redvirus.auth0.com/userinfo')
      .map(res => res.json()));
  }
}
