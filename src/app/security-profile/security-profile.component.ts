import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent {
securityId:any=""
Data:any=[]
constructor(private api:ApiService){
  this.securityId=localStorage.getItem("securityInfo")
  let Data:any={"id":this.securityId}
  this.api.securityProfile(Data).subscribe(
    (response:any)=>{
      console.log(response)
      this.Data=response
    }
  )
}



}
