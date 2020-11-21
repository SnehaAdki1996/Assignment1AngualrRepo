
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginDetailsComponent } from './login-module/login-details/login-details.component';
import { LoginComponentComponent } from './login-module/login-component/login-component.component';
import { LoginDerviceService } from './login-module/login-dervice.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent, 
    LoginDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ LoginDerviceService ,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
