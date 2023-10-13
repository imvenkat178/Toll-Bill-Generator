import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-managerlist',
  templateUrl: './managerlist.component.html',
  styleUrls: ['./managerlist.component.css']
})
export class ManagerlistComponent implements OnInit{

  constructor(private userService:UserService,private SpinnerService: NgxSpinnerService){

  }

  users: User[];

  ngOnInit(): void {
    this.userService.authentication();
    this.SpinnerService.show();
    this.userService.getPendingManagers().subscribe(
      (data: User[]) => {
      this.SpinnerService.hide();
      this.users = data;
    },
    (error)=>{
      this.SpinnerService.show();
      Swal.fire('Error !','Error in loading data !','error');
    }
    );
  }

  public currentuser={
    firstName:'',
    lastName:'',
    gender:'',
    contact:'',
    dob:'',
    email:'',
    password:'',
    status:'',
    usertype:''
  }
  
  approveManager(user: any) {
    this.currentuser=user;
    this.currentuser.status="approved";
    this.SpinnerService.show();
    this.userService.approvePendingManager(this.currentuser).subscribe(
      (data) => {
        this.SpinnerService.hide();
        Swal.fire('Successful !','Status Changed to Approved','success');
        this.ngOnInit();
      },
      (error) => {
        this.SpinnerService.hide();
        Swal.fire('Error !','Status Cannot Be Changed','error');
      }
    );
  }


  rejectManager(id: number) {
    this.SpinnerService.show();
    this.userService.rejectPendingManager(id).subscribe(
      (data) => {
        this.SpinnerService.hide();
        Swal.fire('Successful !','Manager Rejected and Deleted Successfully','success');
        this.ngOnInit();
      },
      (error) => {
        this.SpinnerService.hide();
        Swal.fire('Error !','Status Cannot Be Changed','error');
      }
    );
  }

}
