import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-addtoll',
  templateUrl: './addtoll.component.html',
  styleUrls: ['./addtoll.component.css']
})
export class AddtollComponent implements OnInit{

  constructor(private userService:UserService,private router: Router,private SpinnerService: NgxSpinnerService){
    this.getTollsDetails();
  }

 ngOnInit(): void {
  this.userService.authentication();
 }


  public toll={
    source:'',
    destination:'',
    price:'',
    status:'pending'
  }

  tollDetails = null as any;


  formSubmit()
  {
    var p=parseInt(this.toll.price);
    if(p>0)
    {
      console.log(this.toll);
      this.SpinnerService.show();
      this.userService.addToll(this.toll).subscribe(
        (data)=>{
          //success
          console.log(data);
          this.SpinnerService.hide();
          Swal.fire('Success','Toll is Successfully Added','success');
          this.getTollsDetails();
          },
        (error)=>{
          //error
          console.log(error);
          this.SpinnerService.hide();
          Swal.fire('Failed','Toll Addition Unsuccessful','error');
          }
        )
    }
    else{
      Swal.fire('Failed','Enter a valid price (greater than 0)','error'); 
    }
      
  }

  getTollsDetails() {
    this.SpinnerService.show();
    this.userService.getAllTolls().subscribe(
      (resp) => {
        console.log(resp);
        this.SpinnerService.hide();
        this.tollDetails = resp;
      },
      (err) => {
        this.SpinnerService.hide();
        console.log(err);
      }
    );
  }

  editToll(id: number){
    this.router.navigate(['../manager/updatetoll', id]);
  }
}
