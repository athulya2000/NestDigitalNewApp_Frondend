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
import { AddSecurityGuardComponent } from './add-security-guard/add-security-guard.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { VisitorsLogComponent } from './visitors-log/visitors-log.component';
import { ViewallVisitorslogComponent } from './viewall-visitorslog/viewall-visitorslog.component';
import { DailyVisitorslogComponent } from './daily-visitorslog/daily-visitorslog.component';
import { EmployeeLogComponent } from './employee-log/employee-log.component';
import { ViewallemployeeLogComponent } from './viewallemployee-log/viewallemployee-log.component';
import { DailyemployeelogComponent } from './dailyemployeelog/dailyemployeelog.component';
import { ViewAllLeaveComponent } from './view-all-leave/view-all-leave.component';
import { ViewAllSecurityComponent } from './view-all-security/view-all-security.component';
import { Navbar4Component } from './navbar4/navbar4.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LeavespendingComponent } from './leavespending/leavespending.component';

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
  },
  {
    path:"addsecurity",
    component:AddSecurityGuardComponent
  },
  {
    path:"securitylogin",
    component:SecurityLoginComponent
  },
  {
    path:"securityprofile",
    component:SecurityProfileComponent
  },
  {
    path:"addvisitorslog",
    component:VisitorsLogComponent
  },
  {
    path:"viewvisitorslog",
    component:ViewallVisitorslogComponent
  },
  {
    path:"dailyvisitors",
    component:DailyVisitorslogComponent
  },
  {
    path:"employeelog",
    component:EmployeeLogComponent
  },
  {
    path:"viewallemployeelog",
    component:ViewallemployeeLogComponent
  },
  {
    path:"dailyemployeelog",
    component:DailyemployeelogComponent
  },
  {
    path:"viewallleave",
    component:ViewAllLeaveComponent
  },
  {
    path:"viewallsecurity",
    component:ViewAllSecurityComponent
  },
  {
    path:"leavestatus",
    component:LeaveStatusComponent
  },
  {
    path:"viewpendingleaves",
    component:LeavespendingComponent
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
    AddSecurityGuardComponent,
    Navbar3Component,
    SecurityLoginComponent,
    SecurityProfileComponent,
    VisitorsLogComponent,
    ViewallVisitorslogComponent,
    DailyVisitorslogComponent,
    EmployeeLogComponent,
    ViewallemployeeLogComponent,
    DailyemployeelogComponent,
    ViewAllLeaveComponent,
    ViewAllSecurityComponent,
    Navbar4Component,
    LeaveStatusComponent,
    LeavespendingComponent,
    
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
