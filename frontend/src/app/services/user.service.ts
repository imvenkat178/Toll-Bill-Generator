import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { Toll } from '../Toll';
import { User } from '../User';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router)
  { }

  //for login track
  private loginStatus= new BehaviorSubject<boolean>(this.checkLoginStatus());
  private user = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));

  //add user
  public addUser(user:any)
  {
    return this.http.post(`${baseUrl}/user`, user);
  }

  //login
  public userLogin(user:any)
  {
    return this.http.post(`${baseUrl}/user/login`, user).pipe(
      map(result=>{
        if(result)
        {
          this.user.next(result);
          this.loginStatus.next(true);
          localStorage.setItem('loginStatus','1');
          localStorage.setItem('user',JSON.stringify(result));
        }
        return result;
      })
    );
  }

  get currentUser()
  {
    return JSON.parse(localStorage.getItem("user"));
  }

  get currentName()
  {
    return JSON.parse(localStorage.getItem("user"))?.firstName;
  }

  get currentEmail()
  {
    return JSON.parse(localStorage.getItem("user"))?.email;
  }

  checkLoginStatus():boolean
  {
    return false;
  }

  get isLoggedIn()
  {
    return this.loginStatus.asObservable();
  }

  get currentUserType()
  {
    return JSON.parse(localStorage.getItem("user"))?.usertype;
  }


  //logout method
  public logout()
  {
    this.loginStatus.next(false);
    localStorage.removeItem('user');   
    localStorage.clear();
    localStorage.setItem('loginStatus','0');
    this.router.navigate(['']);
  }

  //authentication
  public authentication()
  {
    if(localStorage.getItem("user"))
    {

    }
    else{
      this.router.navigate(['/login']);
    }
  }


  //fetch pending managers
  public getPendingManagers()
  {
    return this.http.get(`${baseUrl}/admin/managerrequests`);
  }

  //fetch pending toll details
  public getPendingTolls()
  {
    return this.http.get(`${baseUrl}/admin/tollrequests`);
  }

  //approve pending manager
  public approvePendingManager(user: any) {
    return this.http.put(`${baseUrl}/updatemanager`,user);
  }

  //approve pending toll detail
  public approvePendingTollDetail(toll: any) {
    return this.http.put(`${baseUrl}/approvetoll`,toll);
  }


  //reject and delete pending manager
  public rejectPendingManager(id:number)
  {
    return this.http.delete(`${baseUrl}/user/${id}`);
  }

  //get toll by id
  public getTollById(id:number)
  {
    return this.http.get<Toll>(`${baseUrl}/toll/${id}`)
  }

  updateToll(id: number, toll: any) 
  {
    return this.http.put(`${baseUrl}/updatetoll/${id}`, toll);
  }

  //get all tolls
  public getAllTolls()
  {
    return this.http.get(`${baseUrl}/tolls`);
  }

  //save toll
  public addToll(toll:any)
  {
    return this.http.post(`${baseUrl}/manager/toll`,toll);
  }

  //get unique sources from toll
  public getUniqueSources()
  {
    return this.http.get(`${baseUrl}/toll/fetchsources`);
  }


  //get unique destinations from toll
  public getUniqueDestinations()
  {
    return this.http.get(`${baseUrl}/toll/fetchdestinations`);
  }

  //search for toll by taking source and destination
  public getTollBySourceAndDestination(source:string, destination:string)
  {
    return this.http.get(`${baseUrl}/toll/search?source=${source}&destination=${destination}`);
  }

  //get user profile by email id
  public getUserByEmailId(email:string)
  {
    return this.http.get<User>(`${baseUrl}/user?emailId=${email}`);    //added user
  }

  //deleting or rejecting toll
  public deleteTollById(id:number)
  {
    return this.http.delete(`${baseUrl}/toll/${id}`);
  }

}
