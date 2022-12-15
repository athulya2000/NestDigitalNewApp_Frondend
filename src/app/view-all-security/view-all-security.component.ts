import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-security',
  templateUrl: './view-all-security.component.html',
  styleUrls: ['./view-all-security.component.css']
})
export class ViewAllSecurityComponent {
Data:any=[]
constructor(private api:ApiService){
  this.api.viewallSecurity().subscribe(
    (response)=>{
      this.Data=response
    }
  )
}
}
