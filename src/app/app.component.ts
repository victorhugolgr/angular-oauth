import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';


import { OAuthService } from 'angular2-oauth2/oauth-service';

@Component({
  selector: 'app-root',
  template: require('./app.component.html')
  // ,  directives: [ROUTER_DIRECTIVES] // routerLink, router-outlet
})
export class AppComponent {

  constructor(private oauthService: OAuthService) {

    // Id-Provider?
    // Login-Url
    this.oauthService.loginUrl = 'http://localhost:8080/auth/realms/TRE/protocol/openid-connect/auth';

    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin ;

    // The SPA's id. Register SPA with this id at the auth-server
    this.oauthService.clientId = 'tutorial-frontend';

    // The name of the auth-server that has to be mentioned within the token
    this.oauthService.issuer = 'http://localhost:8080/auth/realms/TRE';

    // set the scope for the permissions the client should request
    this.oauthService.scope = 'openid';

    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oauthService.oidc = true;

    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oauthService.setStorage(sessionStorage);

    // To also enable single-sign-out set the url for your auth-server's logout-endpoint here

    this.oauthService.logoutUrl = 'http://localhost:8080/auth/realms/TRE/tokens/logout?redirect_uri=http://localhost:4200&id_token={{id_token}}';

    // This method just tries to parse the token within the url when
    // the auth-server redirects the user back to the web-app
    // It dosn't initiate the login
    this.oauthService.tryLogin({});

  }

}
