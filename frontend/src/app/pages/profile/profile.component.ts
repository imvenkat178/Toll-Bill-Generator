import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private userService: UserService) { }

  myprofileinfo:any;
  email:string;

  ngOnInit(): void {
    
    this.userService.authentication();
    this.myprofileinfo = this.userService.currentUser;
    this.email = this.userService.currentEmail;

    this.userService.getUserByEmailId(this.email).subscribe(
      (resp) => {
        console.log(resp);
        this.myprofileinfo = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
