import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ToolbarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';

import { CartService } from './services/cart.service';
import { DataService } from './services/data.service';
import { SplitButtonModule } from 'primeng/primeng';

const routeConfig: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    CartComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    ButtonModule,
    ToolbarModule,
    SplitButtonModule
  ],
  providers: [CartService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
