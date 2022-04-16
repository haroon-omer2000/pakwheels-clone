import { Component, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { VEHICLEDATA } from '../mock-data';
import { Vehicle } from '../vehicle';
import { Observable, of } from 'rxjs';
import { filterObject } from '../filterInterface';
import { VehicleComponent } from '../components/vehicle/vehicle.component';

@Injectable({
  providedIn: 'root',
})
export class VehicledataService  {
  vehicleData: Vehicle[] = [];
  filterVehicles: filterObject = {"dummy":"dummy"};

  constructor() {
      this.vehicleData = VEHICLEDATA;
  }

  getVehicleData(): Observable<Vehicle[]> {
    console.log("returning,", this.vehicleData)
    const temp_vehicle_data = of(this.vehicleData);
    console.log("also returning,", temp_vehicle_data)

    return (temp_vehicle_data);
  }

  changeVehicleData(filter : filterObject){
    this.filterVehicles['dummy'] = "notdummy";
    this.filterVehicles = filter;
//      if (this.filterVehicles['dummy']!="dummy"){
      console.log("vehicle data service reeached")
      console.log(this.filterVehicles);
      console.log(this.vehicleData);
      console.log('vehicle data before,',this.vehicleData)
      this.vehicleData = this.vehicleData.filter( (el) => {
        return el.city == this.filterVehicles['City'];
        });

      console.log('vehicle data after,',this.vehicleData)

      console.log(this.vehicleData,'dddd');
  //  }

  }

}
