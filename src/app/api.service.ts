import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(add:any)=>{
   return this.http.post("http://localhost:8080/addemployee",add)
  }
  viewAllEmployee=()=>{
    return this.http.get("http://localhost:8080/viewemployee")
  }
  searchEmployee=(search:any)=>{
    return this.http.post("http://localhost:8080/searchemployee",search)
  }
  deletaEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteemployee",data)
  }
  employeeLogin=(login:any)=>{
    return this.http.post("http://localhost:8080/employeelogin",login)
  }
  viewEmployeeProfile=(profile:any)=>{
    return this.http.post("http://localhost:8080/viewprofileemployee",profile)
  }
  leaveApply=(leave:any)=>{
    return this.http.post("http://localhost:8080/applyleave",leave)
  }
  addSecurity=(security:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",security)
  }
  securityLogin=(login:any)=>{
    return this.http.post("http://localhost:8080/securitylogin",login)
  }
  securityProfile=(profile:any)=>{
    return this.http.post("http://localhost:8080/viewsecurityprofile",profile)
  }
  addvisitorsLog=(log:any)=>{
    return this.http.post("http://localhost:8080/addvisitorslog",log)
  }
  viewallVisitorslog=()=>{
    return this.http.get("http://localhost:8080/viewallvisitorslog")
  }
  viewDailyvisitors=(view:any)=>{
    return this.http.post("http://localhost:8080/viewdailyvisitorslog",view)
  }
  employeeLog=(data:any)=>{
    return this.http.post("http://localhost:8080/addemployeelog",data)
  }
  viewallemployeeLog=()=>{
    return this.http.get("http://localhost:8080/viewallemployeelog")
  }
  dailyemployeelog=(data:any)=>{
    return this.http.post("http://localhost:8080/viewdailyemployeelog",data)
  }
  viewallLeave=()=>{
    return this.http.get("http://localhost:8080/viewallleave")
  }
  viewallSecurity=()=>{
    return this.http.get("http://localhost:8080/viewallsecurity")
  }
  updatestatus=(data:any)=>{
    return this.http.post("http://localhost:8080/updatestatus",data)
  }
  viewStatus=(view:any)=>{
    return this.http.post("http://localhost:8080/viewstatus",view)
  }
  leavePending=(data:any)=>{
    return this.http.post("http://localhost:8080/leavecount",data)
  }
  viewPendingLeaves=(view:any)=>{
    return this.http.post("http://localhost:8080/viewpendingleaves",view)
  }
}
