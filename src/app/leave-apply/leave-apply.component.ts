import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent {
leavetype=""
remarks=""
fromdate=""
todate=""

constructor(private api:ApiService){}

readValues=()=>{
  let data:any={"leavetype":this.leavetype,"remarks":this.remarks,"fromdate":this.fromdate,"todate":this.todate}
  console.log(data)
  this.api.leaveApply(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("leave applied successfully")
        window.location.reload();
      }
    }
  )

}
}
