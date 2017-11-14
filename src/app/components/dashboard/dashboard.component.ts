import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ButtonModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.router.navigate(['/dashboard/manage']);
  }
}
