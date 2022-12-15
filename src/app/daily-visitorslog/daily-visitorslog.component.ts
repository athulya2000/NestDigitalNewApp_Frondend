import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-daily-visitorslog',
  templateUrl: './daily-visitorslog.component.html',
  styleUrls: ['./daily-visitorslog.component.css']
})
export class DailyVisitorslogComponent {
date=""
Data:any=[]
constructor(private api:ApiService){}
readValues=()=>{
  let data:any={"date":this.date}
  console.log(data)
  this.api.viewDailyvisitors(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.length==0){
        alert("date is doesnt match")
      }
      else{
        this.Data=response
      }
    }
  )
}
}
