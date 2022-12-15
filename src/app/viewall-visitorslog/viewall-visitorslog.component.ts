import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-visitorslog',
  templateUrl: './viewall-visitorslog.component.html',
  styleUrls: ['./viewall-visitorslog.component.css']
})
export class ViewallVisitorslogComponent {
constructor(private api:ApiService){
  this.api.viewallVisitorslog().subscribe(
    (response)=>{
      this.Data=response
    }
  )
}

Data:any=[]
}
