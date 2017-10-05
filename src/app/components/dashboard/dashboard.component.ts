import { Component, OnInit } from '@angular/core';

import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menu: SelectItem[];
  name: string;
  Description: string;
  Price: number;
  selectedMenu: string;

  constructor() {
    this.menu = [];
    this.menu.push({ label: 'Select Menu', value: null });
    this.menu.push({ label: 'Breakfast', value: { id: 1, name: 'breakfast', code: 'bf' } });
    this.menu.push({ label: 'Lunch', value: { id: 2, name: 'lunch', code: 'ln' } });
    this.menu.push({ label: 'Snacks', value: { id: 3, name: 'snacks', code: 'sn' } });
    this.menu.push({ label: 'Tea', value: { id: 4, name: 'tea', code: 'te' } });
    this.menu.push({ label: 'Dinner', value: { id: 5, name: 'dinner', code: 'dn' } });
  }


  ngOnInit() {
  }
  checking() {
    console.log(this.selectedMenu);
  }
}
