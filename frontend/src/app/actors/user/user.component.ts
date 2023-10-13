import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private userService:UserService){}

  loginStatus: Observable<boolean>;
  isSet=false;
  name:string;

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
