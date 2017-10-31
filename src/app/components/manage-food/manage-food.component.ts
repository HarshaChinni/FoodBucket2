import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ChartModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
@Component({
  selector: 'app-manage-food',
  templateUrl: './manage-food.component.html',
  styleUrls: ['./manage-food.component.css']
})
export class ManageFoodComponent implements OnInit {
  public data: any;
  public option: any;

  public theArray: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSale().subscribe(res => {
      this.theArray = res.map(obj => {
        return [
          obj.Onion,
          obj.Potato,
          obj.Tomato,
          obj.Rice,
          obj.Wheat,
          obj.Bread,
          obj.Spices,
          obj.Milk,
          obj.Tea,
          obj.Coffee
        ];
      });
      this.draw(0);
    });
  }

  draw(index) {
    this.data = {
      labels: [
        'Onion',
        'Potato',
        'Tomato',
        'Rice',
        'Wheat',
        'Bread',
        'Spices',
        'Milk',
        'Tea',
        'Coffee'
      ],
      datasets: [
        {
          label: 'Stuff',
          data: this.theArray[index],
          backgroundColor: [
            'rgba(48, 32, 54, 0.7)',
            'rgba(183, 146, 104, 0.7)',
            'rgba(255, 99, 71, 0.7)',
            'rgba(238, 236, 227, 0.7)',
            'rgba(245, 222, 179, 0.7)',
            'rgba(243, 213, 165, 0.7)',
            'rgba(173, 175, 100, 0.7)',
            'rgba(255, 253, 212, 0.7)',
            'rgba(234, 176, 94, 0.7)',
            'rgba(142, 91, 62, 0.7)'
          ],
          borderColor: [
            'rgba(48, 32, 54, 1)',
            'rgba(183, 146, 104, 1)',
            'rgba(255, 99, 71, 1)',
            'rgba(238, 236, 227, 1)',
            'rgba(245, 222, 179, 1)',
            'rgba(243, 213, 165, 1)',
            'rgba(173, 175, 100, 1)',
            'rgba(255, 253, 212, 1)',
            'rgba(234, 176, 94, 1)',
            'rgba(142, 91, 62, 1)'
          ],
          borderWidth: 1
        }
      ]
    };

    this.option = {
      title: {
        display: true,
        text: 'Dashboard',
        fontSize: 16
      },
      legend: {
        display: false,
        position: 'bottom'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };
  }
}
