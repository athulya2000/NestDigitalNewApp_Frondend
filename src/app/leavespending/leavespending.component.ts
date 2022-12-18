import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leavespending',
  templateUrl: './leavespending.component.html',
  styleUrls: ['./leavespending.component.css']
})
export class LeavespendingComponent {
 
employeeid:any=""
Data:any=[]
constructor(private api:ApiService){
  this.employeeid=localStorage.getItem("employeeId")
  let Data:any={"employeeid":this.employeeid}
  this.api.viewPendingLeaves(Data).subscribe(
    (response:any)=>{
      console.log(response)
      this.Data=response
    }
  )
}
}
