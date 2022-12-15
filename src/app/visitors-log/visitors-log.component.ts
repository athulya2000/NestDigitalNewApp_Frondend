import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitors-log',
  templateUrl: './visitors-log.component.html',
  styleUrls: ['./visitors-log.component.css']
})
export class VisitorsLogComponent {
name=""
purpose=""
whomtomeet=""
date=""
entrydatetime=""
exitdatetime=""

constructor(private api:ApiService){}

readValues=()=>{
  let data:any={"name":this.name,"purpose":this.purpose,"whomtomeet":this.whomtomeet,"date":this.date,"entrydatetime":this.entrydatetime,"exitdatetime":this.exitdatetime}
  console.log(data)
  this.api.addvisitorsLog(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="added visitorslog"){
        alert("added successfully")
        window.location.reload();
      }
      else{
        alert("something went wrong")
      }
    }
  )
  
}

}