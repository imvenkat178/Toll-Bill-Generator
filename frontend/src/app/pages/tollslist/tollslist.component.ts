import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Toll } from 'src/app/Toll';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-tollslist',
  templateUrl: './tollslist.component.html',
  styleUrls: ['./tollslist.component.css']
})
export class TollslistComponent implements OnInit{

  constructor(private userService:UserService,private SpinnerService: NgxSpinnerService){}

  myusertype: string;

  tolls: Toll[];

  ngOnInit(): void 
  {

    this.userService.authentication();
    this.SpinnerService.show();
    
      this.userService.getPendingTolls().subscribe(
        (data: Toll[]) => {
        this.SpinnerService.hide();
        this.tolls = data;
      },
      (error)=>{
        this.SpinnerService.hide();
        Swal.fire('Error !','Error in loading data !','error');
      }
      );    
  }
  
  public currenttoll={
    source:'',
    destination:'',
    price:'',
    status:''
  }
  
  approveTollDetail(toll: any) {
    this.currenttoll=toll;
    this.currenttoll.status="approved";
    this.userService.approvePendingTollDetail(this.currenttoll).subscribe(
      (data) => {
        Swal.fire('Successful !','Status Changed to Approved','success');
        this.ngOnInit();
      },
      (error) => {
        Swal.fire('Error !','Status Cannot Be Changed','error');
      }
    );
  }


  rejectToll(id: number) {
    this.userService.deleteTollById(id).subscribe(
      (data) => {
        Swal.fire('Successful !','Toll Rejected and Deleted Successfully','success');
        this.ngOnInit();
      },
      (error) => {
        Swal.fire('Error !','Status Cannot Be Changed','error');
      }
    );
  }

}
