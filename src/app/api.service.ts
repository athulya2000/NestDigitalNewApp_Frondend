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
}
