import { Component, OnInit } from '@angular/core';
import { vehicle } from '../vehicle';
import { vehicleService } from '../vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
  vehicles: vehicle[];

  constructor(private vehicleservice:vehicleService) {
    //this.vehicles = this.vehicleservice.getvehicles();
   }

  ngOnInit() {
    this.getvehicles();
  }

  getvehicles():void{
    this.vehicles= this.vehicleservice.getvehicles();
  }
}
