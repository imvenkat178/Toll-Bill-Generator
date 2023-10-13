import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit
{

  constructor(private userService:UserService){}

  loginStatus?: Observable<boolean>;
  isSet=false;

  ngOnInit(): void {
    
    this.loginStatus=this.userService.isLoggedIn;

    console.log("LoginStatus is :-",this.loginStatus);

    if(this.loginStatus)
    {
      this.isSet=true;
    }
    else{
      this.isSet=false;
    }
  }

  onLogout()
  {
    this.userService.logout();
  }
}
