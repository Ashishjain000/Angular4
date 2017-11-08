import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { vehicle } from './vehicle';

const vehicles:vehicle[]=[{
    id:1,
    vehicleNumber:"abc",
    Type:'car'
},{
    id:2,
    vehicleNumber:'Ashish',
    Type:'Bus'
},
{
    id:3,
    vehicleNumber:'Chand',
    Type:'Truck'
}
];


@Injectable()
export class vehicleService {
    private vehicales;

    constructor(){
        this.vehicales=vehicles;
    }

    getvehicles():vehicle[]{
        return this.vehicales;
    }

    getVehicle(id:number):vehicle {
        return this.vehicales.find(vehicle=>vehicle.id===id);
    }
}