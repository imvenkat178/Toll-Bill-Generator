import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-managerfunction',
  templateUrl: './managerfunction.component.html',
  styleUrls: ['./managerfunction.component.css']
})
export class ManagerfunctionComponent implements OnInit{

  uname:any;
  constructor(private userService:UserService){
    this.uname=this.userService.currentName;
  }

  ngOnInit(): void {
    this.userService.authentication();
   }
   
}
