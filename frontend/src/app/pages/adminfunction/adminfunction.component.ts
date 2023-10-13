import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminfunction',
  templateUrl: './adminfunction.component.html',
  styleUrls: ['./adminfunction.component.css']
})
export class AdminfunctionComponent implements OnInit{

  uname?:any;
  constructor(private userService:UserService){
  }
  
  ngOnInit(): void {
    this.userService.authentication();
    this.uname=this.userService.currentName;
   }
   

}
