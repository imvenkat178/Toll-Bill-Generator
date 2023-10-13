import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-uregform',
  templateUrl: './uregform.component.html',
  styleUrls: ['./uregform.component.css']
})
export class UregformComponent{

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
    status:'approved',
    usertype:'User'
  }


  formSubmit()
  {
    
    this.SpinnerService.show();
    
    //addUser: UserService
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

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

}


