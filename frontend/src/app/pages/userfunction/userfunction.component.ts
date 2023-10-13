import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userfunction',
  templateUrl: './userfunction.component.html',
  styleUrls: ['./userfunction.component.css']
})
export class UserfunctionComponent implements OnInit{

  uname:any;
  constructor(private userService:UserService){
    this.userService.authentication();
    this.uname=this.userService.currentName;
  }

  ngOnInit() {}

}
