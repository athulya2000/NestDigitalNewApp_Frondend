import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Routes } from '@angular/router';
import { Navbar1Component } from './navbar1/navbar1.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    Navbar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
