import { Component, OnInit } from '@angular/core';
import { vehicle } from '../vehicle';
import { vehicleService } from '../vehicle.service';


@Component({
  selector: 'app-vehical-list-compoent',
  templateUrl: './vehical-list-compoent.component.html',
  styleUrls: ['./vehical-list-compoent.component.css'],
})
export class VehicalListCompoentComponent implements OnInit {

  vehicles: vehicle[];
  selectedvehicle:vehicle;

  constructor(private vehicleservice:vehicleService) {
      this.vehicles = this.vehicleservice.getvehicles();
   }

  ngOnInit() {
  }

  Onselect(vehicle:vehicle){
    this.selectedvehicle=vehicle;
  }

}
