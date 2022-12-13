import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { Navbar1Component } from './navbar1/navbar1.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { ViewAllEmployeeComponent } from './view-all-employee/view-all-employee.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"addemployee",
    component:AddEmployeeComponent
  },
  {
    path:"viewallemployee",
    component:ViewAllEmployeeComponent
  },
  {
    path:"searchemployee",
    component:SearchemployeeComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    Navbar1Component,
    AddEmployeeComponent,
    EmployeeNavbarComponent,
    ViewAllEmployeeComponent,
    SearchemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
