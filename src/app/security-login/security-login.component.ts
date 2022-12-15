import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {
username=""
password=""
searchUser:any=[]

constructor(private api:ApiService,private route:Router){}

readValues=()=>{
  let data:any={"username":this.username,"password":this.password}
  console.log(data)
  this.api.securityLogin(data).subscribe(
    (response:any)=>{
      this.username=""
      this.password=""
      console.log(response)
      if(response.status=="successfully login"){
        this.searchUser=response;
        let securityId=response.securityId
        console.log(securityId)
        localStorage.setItem("securityInfo",securityId)
        this.route.navigate(['/securityprofile'])
      }
      else{
        alert(response.message)
      }
    }
  )
}
}
