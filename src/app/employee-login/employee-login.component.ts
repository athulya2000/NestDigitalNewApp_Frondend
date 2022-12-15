import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
username=""
password=""
searchUser:any=[]

constructor(private api:ApiService,private route:Router){}

readValues=()=>{
  let data:any={"username":this.username,"password":this.password}
  console.log(data)
  this.api.employeeLogin(data).subscribe(
    (response:any)=>{
      this.username=""
      this.password=""
      console.log(response)
      if(response.status=="Successfully login"){
        this.searchUser=response;
        let employeeid=response.employeeid
        console.log(employeeid)
        localStorage.setItem("employeeId",employeeid)
        this.route.navigate(['/employeeprofile'])
      }
      else{
        alert(response.message)
      }
      
    }
  )
}

}
