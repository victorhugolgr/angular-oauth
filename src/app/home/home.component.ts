import { Component } from '@angular/core';
import { OAuthService } from 'angular2-oauth2/oauth-service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private oAuthService: OAuthService) {
  }

  public login() {
    this.oAuthService.initImplicitFlow();
  }

  public logoff() {
    this.oAuthService.logOut();
  }

  public get name() {
    const claims = this.oAuthService.getIdentityClaims();
    if (!claims) return null;
    return claims.given_name;
  }

}