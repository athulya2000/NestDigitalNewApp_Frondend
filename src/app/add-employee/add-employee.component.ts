import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
employeecode=""
employeename=""
designation=""
salary=""
emailid=""
username=""
password=""
phoneno=""

constructor(private api:ApiService){}

readValues=()=>{
  let data:any={"employeecode":this.employeecode,"employeename":this.employeename,"designation":this.designation,"salary":this.salary,"emailid":this.emailid,"username":this.username,"password":this.password,"phoneno":this.phoneno}
  console.log(data)
  this.api.addEmployee(data).subscribe(
    (response:any)=>{
      this.employeecode=""
      this.employeename=""
      this.designation=""
      this.salary=""
      this.emailid=""
      this.username=""
      this.password=""
      this.phoneno=""
      if(response.status=="success"){
        alert("employee added successfully")
        let employeeid=response.employeeid
        console.log(employeeid)
        localStorage.setItem("employeeId",employeeid)
      }
      

    }
  )

}
}
