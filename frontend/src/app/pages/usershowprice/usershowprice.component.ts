import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Toll } from 'src/app/Toll';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-usershowprice',
  templateUrl: './usershowprice.component.html',
  styleUrls: ['./usershowprice.component.css']
})
export class UsershowpriceComponent implements OnInit{

  constructor(private userService: UserService,private SpinnerService: NgxSpinnerService){}

  sourcelist:any;
  index:number;
  destinationlist:any;
  destinationdropdownlist :any;
  toll:any;
  istoll:boolean = false;
  isSourceSet=false;
  isDestinationSet=false;
  source:string;
  destination:string;

  ngOnInit(): void
  {
    this.userService.authentication();
    this.SpinnerService.show();
    this.userService.getUniqueSources().subscribe(
        (data) => {
        
        this.SpinnerService.hide();
        this.sourcelist = data;
      },
      (error)=>{
        
        this.SpinnerService.hide();
        Swal.fire('Error !','Error in loading Source data !','error');
      }
      );

      this.userService.getUniqueDestinations().subscribe(
        (data) => {
        
        this.destinationlist = data;
        this.destinationdropdownlist = data;
      },
      (error)=>{
        
        Swal.fire('Error !','Error in loading Destination data !','error');
      }
      );
  }

  onSubmit()
  {
    this.SpinnerService.show();
    if(this.isSourceSet==true && this.isDestinationSet==true)
    {
      if(this.source!=null && this.destination!=null)
      {
        this.userService.getTollBySourceAndDestination(this.source, this.destination).subscribe(
        (data) => {
          
          this.SpinnerService.hide();
          this.toll = data;
          this.istoll=true;
        },
        (error)=>{
          
          this.SpinnerService.hide();
          Swal.fire('Error !','Sorry this toll detail is not available !','error');
        }
        );
      }
    }
  }

  onSourceSelected(value:string)
  {
    
     this.isSourceSet=true;
     this.source=value;
    

    this.destinationdropdownlist = [...this.destinationlist];
    this.index = this.destinationdropdownlist.indexOf(value);
    if(this.index>=0)
    {
      this.destinationdropdownlist.splice(this.index,1);
    }
  }

  onDestinationSelected(value:string)
  {
    
    this.isDestinationSet=true;
    this.destination=value;
    
  }
}
