import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Auth0Service } from './services/auth0.service';

import { ToolbarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food Bucket';
  cartBadge = 0;
  items: MenuItem[];

  Authenticated = false;

  constructor(
    public cartService: CartService,
    public authService: Auth0Service
  ) {}
}
