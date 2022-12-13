import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent {
employeecode=""
SearchData:any=[]

constructor(private api:ApiService){}
readValues=()=>{
  let data:any={"employeecode":this.employeecode}
  console.log(data)
  this.api.searchEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.length==0){
        alert("Invalid employee code")
      }
      else{
        this.SearchData=response
      }
    }
  )
}
deleteBtnClick=(id:any)=>{
  let data:any={"id":id}
  this.api.deletaEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="deleted"){
        alert("deleted successfully")
        window.location.reload();
      }
    }
  )
}

}
