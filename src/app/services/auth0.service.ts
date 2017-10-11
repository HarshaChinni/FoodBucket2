import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

declare var Auth0Lock: any;

@Injectable()
export class Auth0Service {

  lock = new Auth0Lock('uUgZOgGmcBw6yDXCOL1yssPlxHuTFoy6', 'redvirus.auth0.com', {
    languageDictionary: {
      title: 'Login to Food Bucket'
    },
    theme: {
      logo: '../../favicon.ico',
      primaryColor: '#ffffff'
    }
  });

  constructor(private router: Router) {
    this.lock.on('authenticated', authResult => {
      console.log(authResult);
      localStorage.setItem('idToken', authResult.idToken);
    });
  }

  login() {
    this.lock.show();
    this.router.navigate(['/dashboard']);
  }
  isAuthenticated(): boolean {
    return tokenNotExpired('idToken');
  }
  logout() {
    localStorage.removeItem('idToken');
  }
}

