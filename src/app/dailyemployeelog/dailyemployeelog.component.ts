import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dailyemployeelog',
  templateUrl: './dailyemployeelog.component.html',
  styleUrls: ['./dailyemployeelog.component.css']
})
export class DailyemployeelogComponent {
date=""
Data:any=[]
constructor(private api:ApiService){}

readValues=()=>{
  let data:any={"date":this.date}
  console.log(data)
  this.api.dailyemployeelog(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.length==0){
        alert("date doesnt match")
      }
      else{
        this.Data=response
      }
    }
  )
}
}
