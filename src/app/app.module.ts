// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';

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
import { DropdownModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

// app services
import { CartService } from './services/cart.service';
import { DataService } from './services/data.service';
import { Auth0Service } from './services/auth0.service';
import { AuthGuard } from './services/auth.guard';
import { Common } from './interfaces/common';
// app components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { DeleteFoodComponent } from './components/delete-food/delete-food.component';
import { ManageFoodComponent } from './components/manage-food/manage-food.component';

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'addFood',
        component: AddFoodComponent
      },
      {
        path: 'delFood',
        component: DeleteFoodComponent
      }
    ]
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

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'id_token'
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    CartComponent,
    ContactComponent,
    HomeComponent,
    DashboardComponent,
    AddFoodComponent,
    DeleteFoodComponent,
    ManageFoodComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    GrowlModule,
    DropdownModule,
    InputTextModule,
    ConfirmDialogModule
  ],
  providers: [{
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  },
    CartService, DataService, ConfirmationService, Auth0Service, AuthGuard, Common],
  bootstrap: [AppComponent]
})
export class AppModule { }


