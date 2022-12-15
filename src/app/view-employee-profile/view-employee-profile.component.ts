import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-profile',
  templateUrl: './view-employee-profile.component.html',
  styleUrls: ['./view-employee-profile.component.css']
})
export class ViewEmployeeProfileComponent {

employeeid:any=""
Data:any=[]



constructor(private api:ApiService){
  this.employeeid=localStorage.getItem("employeeId")
  let Data:any={
    "id":this.employeeid
  }
  this.api.viewEmployeeProfile(Data).subscribe(
    (response:any)=>{
      console.log(response)
      this.Data=response
    }
  )
  }
  
}

