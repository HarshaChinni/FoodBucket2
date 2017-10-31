import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ButtonModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
