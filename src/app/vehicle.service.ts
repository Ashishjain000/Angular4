import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { vehicle } from './vehicle';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// const vehicles:vehicle[]=[{
//     id:1,
//     vehicleNumber:"abc",
//     Type:'car'
// },{
//     id:2,
//     vehicleNumber:'Ashish',
//     Type:'Bus'
// },
// {
//     id:3,
//     vehicleNumber:'Chand',
//     Type:'Truck'
// }
// ];


@Injectable()
export class vehicleService {
    private vehicales;
    private vehicleurl="http://localhost:3000/tasks"

    constructor(private http:Http){
        //this.vehicales=vehicles;
    }

    getvehicles():Promise<vehicle[]>{
        return this.http.get(this.vehicleurl).toPromise()
        .then(this.Result)
        .catch(this.handleError);
    }

    getVehicle(id:number):vehicle {
        return this.vehicales.find(vehicle=>vehicle.id===id);
    }

    private Result(data:any):Promise<any>{
        console.error('An error occurred', data);
        return Promise.resolve(data.json() as vehicle);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }
}