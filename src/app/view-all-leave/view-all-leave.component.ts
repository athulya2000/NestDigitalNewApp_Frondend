import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-leave',
  templateUrl: './view-all-leave.component.html',
  styleUrls: ['./view-all-leave.component.css']
})
export class ViewAllLeaveComponent {
constructor(private api:ApiService){
  this.api.viewallLeave().subscribe(
    (response)=>{
      this.Leave=response
    }
  )
}

Leave:any=[]
}
