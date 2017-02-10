import { ContatoService } from '../contato.service';
import { Contato } from '../domain/contato';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular2-oauth2/oauth-service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  errorMessage: string;
  contatos: Contato[];
  mode = 'Observable';

  constructor(private oAuthService: OAuthService, private contatoService: ContatoService) { }

  ngOnInit() {this.getContatos(); }

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

  getContatos() {
    this.contatoService.getHeroes()
                        .subscribe(
                          contatos => this.contatos = contatos,
                          error => this.errorMessage = <any>error
                          );
  }

}