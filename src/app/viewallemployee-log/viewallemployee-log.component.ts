import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallemployee-log',
  templateUrl: './viewallemployee-log.component.html',
  styleUrls: ['./viewallemployee-log.component.css']
})
export class ViewallemployeeLogComponent {
constructor(private api:ApiService){
  this.api.viewallemployeeLog().subscribe(
    (response)=>{
      this.data=response
    }
  )
}

data:any=[]
}
