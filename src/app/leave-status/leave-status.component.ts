import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent {
employeeid:any=""
searchData:any=[]
constructor(private api:ApiService){
  this.employeeid=localStorage.getItem("employeeId")
}
readValues=()=>{
  let data:any={"employeeid":this.employeeid}
  console.log(data)
  this.api.viewStatus(data).subscribe(
    (response:any)=>{
      this.searchData=response
    }
  )
}

}
