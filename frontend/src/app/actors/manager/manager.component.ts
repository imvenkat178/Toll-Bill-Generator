import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  constructor(private userService:UserService){}

  loginStatus: Observable<boolean>;
  name:string;
  isSet=false;

  ngOnInit(): void {
    
    this.loginStatus=this.userService.isLoggedIn;
    this.name=this.userService.currentName;


    if(this.name!=null)
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
