import { Component, OnInit } from '@angular/core';
import { MenuModule, MenuItem } from 'primeng/primeng';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dataService: DataService) { }
  public items: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'Menu',
      items: [
        {
          label: 'Breakfast', icon: 'fa-cutlery', command: (click) => { this.dataService.setCurrentMenu('breakfast'); },
          routerLink: '/menu'
        },
        {
          label: 'Lunch', icon: 'fa-cutlery', command: (click) => { this.dataService.setCurrentMenu('lunch'); },
          routerLink: '/menu'
        },
        {
          label: 'Snacks', icon: 'fa-apple', command: (click) => { this.dataService.setCurrentMenu('snacks'); },
          routerLink: '/menu'
        },
        {
          label: 'Tea', icon: 'fa-coffee', command: (click) => { this.dataService.setCurrentMenu('tea'); },
          routerLink: '/menu'
        },
        {
          label: 'Dinner', icon: 'fa-cutlery', command: (click) => { this.dataService.setCurrentMenu('dinner'); },
          routerLink: '/menu'
        }
      ]
    }];
  }

}
