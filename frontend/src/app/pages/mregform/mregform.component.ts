import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-mregform',
  templateUrl: './mregform.component.html',
  styleUrls: ['./mregform.component.css']
})
export class MregformComponent{

  constructor(private userService:UserService, private router:Router,private SpinnerService: NgxSpinnerService)
  {}

  public user={
    firstName:'',
    lastName:'',
    gender:'',
    contact:'',
    dob:'',
    email:'',
    password:'',
    status:'pending',
    usertype:'Manager'
  }


  formSubmit()
  {
    var birthdate = new Date(this.user.dob);
    var dt = new Date();
    var today = dt.getDate();
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);   

    if(age>=18)
    {
      this.SpinnerService.show();
      this.userService.addUser(this.user).subscribe(
        (data)=>{
          //success
          this.SpinnerService.hide();
          Swal.fire('Success','User is Successfully Registered','success');
          this.router.navigate(['/login']);
          },
        (error)=>{
          //error
          this.SpinnerService.hide();
          Swal.fire('Failed','Registration Unsuccessful, Email is already Registered','error');
          }
        )
    }
    else
    {
      this.SpinnerService.hide();
      Swal.fire('Failed','Your Age is less than 18 years, Registration Unsuccessful','error');
    }
  }


  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
}
