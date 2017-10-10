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
    return this.http.get('http://localhost:3000/' + this.currentMenu)
      .map(res => res.json());
  }

  postFood(target: string, obj: FoodDetail) {
    return (this.http.post('http://localhost:3000/' + target, obj)
      .subscribe(res => {
        return true;
      }));
  }

  deleteFood(targetId: number) {
    return (this.http.delete('http://localhost:3000/' + this.currentMenu + '/' + targetId)
      .subscribe(res => {
        return true;
      }));
  }
}
