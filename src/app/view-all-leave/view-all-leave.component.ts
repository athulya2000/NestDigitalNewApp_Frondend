import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-leave',
  templateUrl: './view-all-leave.component.html',
  styleUrls: ['./view-all-leave.component.css']
})
export class ViewAllLeaveComponent {
constructor(private api:ApiService){
  api.viewallLeave().subscribe(
    (response)=>{
      this.Leave=response;
      
    }
  )
  
  }

Leave:any=[]
statusdata:any={}
readValue=(Leave:any)=>
{
  this.statusdata=1;
  let accept:any={"employeeid":Leave,"status":this.statusdata}
  console.log(accept)
  this.api.updatestatus(accept).subscribe(
    (Response:any)=>
    {
     
      if(Response.status=="success"){
        console.log(Response)
      console.log(Response.status)
      this.api.leavePending(accept).subscribe(
        (Response:any)=>{
          console.log(Response)
        }
      )
      
      alert("success")
      }
      else{
        alert("failed")
      }
    }
  )
}
reject=(Leave:any)=>{
  this.statusdata=-1;
  let reject:any={"employeeid":Leave,"status":this.statusdata}
  console.log(reject)
  this.api.updatestatus(reject).subscribe(
    (Response:any)=>{
      
      if(Response.status=="success"){
        console.log(Response)
      console.log(Response.status)
      alert("success")
      }
      else{
        alert("failed")
      }
    }
  )
}
}
 


