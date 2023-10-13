import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit{

  constructor(private userService:UserService, private router: Router,private SpinnerService: NgxSpinnerService)
  {}

  ngOnInit(): void {
    this.userService.authentication();
   }

  public user={
    email:'',
    password:'',
  };

  users: any;

  formSubmit()
  {
    this.SpinnerService.show();
    this.userService.userLogin(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        this.SpinnerService.hide();
        Swal.fire('Success','Login Successful','success');
        this.users=data;
        if(this.users.usertype.startsWith('Admin'))
        {
          this.router.navigate(['/admin/adminhome']);
        }
        else if(this.users.usertype.startsWith('Manager'))
        {
          this.router.navigate(['/manager/managerhome']);
        }
        else if(this.users.usertype.startsWith('User'))
        {
          this.router.navigate(['/user/userhome']);
        }
      },
      (error)=>{
        //error
        this.SpinnerService.hide();
        Swal.fire('Failed','Either you are not Authorized or credentials does not exist','error');
      }
    )
  }
}
