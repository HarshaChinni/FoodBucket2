import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class Auth0Service {

  lock = new Auth0Lock('uUgZOgGmcBw6yDXCOL1yssPlxHuTFoy6', 'redvirus.auth0.com', {});

  constructor() {
    this.lock.on('authenticated', authResult => {
      console.log(authResult);
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  login() {
    // console.log(this.lock);
    this.lock.show();
  }
  isAuthenticated(): boolean {
    return tokenNotExpired('idToken');
    // return true;
  }
  logout() {
    localStorage.removeItem('id_token');
  }
}

