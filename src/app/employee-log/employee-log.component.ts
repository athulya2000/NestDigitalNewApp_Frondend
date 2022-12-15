import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-log',
  templateUrl: './employee-log.component.html',
  styleUrls: ['./employee-log.component.css']
})
export class EmployeeLogComponent {
date=""
entrydatetime=""
exitdatetime=""
constructor(private api:ApiService){}
readValues=()=>{
  let data:any={
    "employeeid":localStorage.getItem("employeeId"),
    "date":this.date,
    "entrydatetime":this.entrydatetime,
    "exitdatetime":this.exitdatetime
  }
  console.log(data)
  this.api.employeeLog(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="employeelog added")
      {
        alert("entry added")
        window.location.reload();
      }
    }
  )
}

}
