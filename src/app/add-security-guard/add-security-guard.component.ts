import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security-guard',
  templateUrl: './add-security-guard.component.html',
  styleUrls: ['./add-security-guard.component.css']
})
export class AddSecurityGuardComponent {
employeecode=""
name=""
username=""
password=""

constructor(private api:ApiService){}

readValues=()=>{
  let data:any={"employeecode":this.employeecode,"name":this.name,"username":this.username,"password":this.password}
  console.log(data)
  this.api.addSecurity(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("successfully added")
        window.location.reload();
      }
      else{
        alert("something went wrong")
      }
    }
  )
}
}
