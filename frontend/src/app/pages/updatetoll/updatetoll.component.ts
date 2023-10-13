import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Toll } from 'src/app/Toll';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatetoll',
  templateUrl: './updatetoll.component.html',
  styleUrls: ['./updatetoll.component.css']
})
export class UpdatetollComponent implements OnInit {

  id: number;
  toll={
    id:0,
    source:'',
    destination:'',
    price:0,
  }
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.userService.authentication();
    this.id = this.route.snapshot.params['id'];
    this.SpinnerService.show();
    this.userService.getTollById(this.id).subscribe(
      data => {
        this.SpinnerService.hide();
      
      this.toll.source=data.source;
      this.toll.destination=data.destination;
      this.toll.price=data.price;
    }, 
    error => {
      
      this.SpinnerService.hide();
      Swal.fire('Error !','Error loading Toll Data','error');
    }
    )
  }

  onSubmit(){
    if(this.toll.price>0)
    {
      this.userService.updateToll(this.id, this.toll).subscribe( data =>{
        Swal.fire('Successful', 'Updation Successful','success');
        this.goToTollList();
      }
      , error => console.log(error));
    }
    else{
      Swal.fire('Price is Empty','Please Enter the price (greater than 0)','error');
    }
    
  }

  goToTollList(){
    this.router.navigate(['../manager/addorupdatetoll']);
  }
  
}
