import { Component, OnInit,Input } from '@angular/core';
import { vehicle } from '../vehicle';
import { vehicleService } from '../vehicle.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehical-details',
  templateUrl: './vehical-details.component.html',
  styleUrls: ['./vehical-details.component.css'],
   
})
export class VehicalDetailsComponent implements OnInit {
 
  @Input() vehicle: vehicle;
  

  constructor(private route: ActivatedRoute,private vehicalservice:vehicleService,private location:Location) { }

  ngOnInit() {
    this.getVehicle();
  }
  goBack(): void {
   this.location.back();
  }

  getVehicle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    debugger;
    this.vehicle= this.vehicalservice.getVehicle(id);
  }

}
