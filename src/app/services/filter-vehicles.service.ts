import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filterObject } from '../filterInterface';
import { VehicledataService } from './vehicledata.service';

@Injectable({
  providedIn: 'root'
})
export class FilterVehiclesService {
  //filterVehicles: Array<any> = [];
  filterVehicles: filterObject = {"dummy":"dummy"};

  constructor(private vehicleService: VehicledataService) { }

  // getFilter(): Observable<any>{
  //   const local_filter = of(this.filterVehicles);
  //   this.vehicleService.changeVehicleData(local_filter)
  //   return local_filter;
  // }

  addFilter(property:string, value:string){
    console.log('recieved filter: ',property, value);
    this.filterVehicles["dummy"] = "notdummy";
    this.filterVehicles[property] = value;
    console.log('filter vehicles object: ',this.filterVehicles);
  }

  changeData (){
    console.log('Filter vehicle change data recived',this.filterVehicles)
    this.vehicleService.changeVehicleData(this.filterVehicles);
  }

}
