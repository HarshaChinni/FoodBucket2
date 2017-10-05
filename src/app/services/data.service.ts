import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  currentMenu = 'breakfast';

  constructor(public http: Http) { }

  setCurrentMenu(selectMenu) {
    this.currentMenu = selectMenu;
  }

  getFood() {
    console.log('got' + this.currentMenu);
    return this.http.get('http://localhost:3000/' + this.currentMenu)
      .map(res => res.json());
  }

}
