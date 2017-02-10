import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContatoService } from './contato.service';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OAuthService, ContatoService],   // <-- Provider for OAuthService
  bootstrap: [AppComponent]
})
export class AppModule { }
