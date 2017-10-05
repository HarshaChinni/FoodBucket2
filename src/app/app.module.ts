// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// Prime ng modules
import { ToolbarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

// app comoonents
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

// app services
import { CartService } from './services/cart.service';
import { DataService } from './services/data.service';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'nav',
    component: NavComponent
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
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    MenuModule,
    DataTableModule,
    SharedModule,
    DataListModule,
    GrowlModule
  ],
  providers: [CartService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
