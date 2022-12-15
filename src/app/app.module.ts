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
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ViewEmployeeProfileComponent } from './view-employee-profile/view-employee-profile.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';

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
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"employeeprofile",
    component:ViewEmployeeProfileComponent
  },
  {
    path:"applyleave",
    component:LeaveApplyComponent
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
    SearchemployeeComponent,
    EmployeeLoginComponent,
    ViewEmployeeProfileComponent,
    Navbar2Component,
    LeaveApplyComponent,
    
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
