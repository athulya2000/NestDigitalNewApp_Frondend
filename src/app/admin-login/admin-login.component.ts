import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
username=""
password=""

constructor(private route:Router){}

readvalues=()=>{
  let data:any={"username":this.username,"password":this.password}
  console.log(data)
  if(this.username=="nestdigital" && this.password=="nest"){
    this.route.navigate(['/addemployee'])
  }
}
}
