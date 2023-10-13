import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private userService: UserService){}

  loginStatus: Observable<boolean>;

  ngOnInit(): void {
    
    this.loginStatus=this.userService.isLoggedIn;
  }

  onLogout()
  {
    this.userService.logout();
  }

  public loggedType='';

}
