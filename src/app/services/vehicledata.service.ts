import { Injectable } from '@angular/core';
import { VEHICLEDATA } from '../mock-data';
import { Vehicle } from '../vehicle';
import { Observable, of } from 'rxjs';
import { filterObject } from '../filterInterface';

@Injectable({
  providedIn: 'root',
})
export class VehicledataService  {
  vehicleData: Vehicle[] = [];
  filterVehicles: filterObject = {
    city: "",
    make: "",
    price_rupees: "",
    year: "",
    mileage_miles: "",
    color: "",
    vehicle_type: "",
    rating: "",
  };

  constructor() {
      this.vehicleData = VEHICLEDATA;
  }

  addFilter(property:string, value:string){
    this.filterVehicles[property] = value;
  }

  getVehicleData(): Observable<Vehicle[]> {
    const temp_vehicle_data = of(this.vehicleData);
    return (temp_vehicle_data);
  }

  filterCity(){
    if (this.filterVehicles['city'] != ""){
      this.vehicleData = this.vehicleData.filter( (el) => {
        return (
              el.city == this.filterVehicles['city']
          );
      });
    }
  }

  filterMake(){
    if (this.filterVehicles['make'] != ""){
      this.vehicleData = this.vehicleData.filter( (el) => {
        return (
              el.make == this.filterVehicles['make']
          );
      });
    }
  }

  filterColor(){
    if (this.filterVehicles['color'] != ""){
      this.vehicleData = this.vehicleData.filter( (el) => {
        return (
              el.color == this.filterVehicles['color']
          );
      });
    }
  }

  filterVehicleType(){
    if (this.filterVehicles['vehicle_type'] != ""){
      this.vehicleData = this.vehicleData.filter( (el) => {
        return (
              el.vehicle_type == this.filterVehicles['vehicle_type']
          );
      });
    }
  }

  filterRating(){
    if (this.filterVehicles['rating'] != ""){
      this.vehicleData = this.vehicleData.filter( (el) => {
        return (
              el.rating == parseInt(this.filterVehicles['rating'])
          );
      });
    }
  }

  filterPrice(){
    if (this.filterVehicles['price_rupees'] != ""){
      var split_price = this.filterVehicles['price_rupees'].split(" ");
      if (split_price[1] != '+'){
        let min = parseInt(split_price[0].split(",").join(""))
        let max = parseInt(split_price[2].split(",").join(""));
        this.vehicleData = this.vehicleData.filter( (el) => {
          return (
                (el.price_rupees >= min) &&
                (el.price_rupees < max)
            );
        });
      }
      else{
        let min = parseInt(split_price[0].split(",").join(""))
        this.vehicleData = this.vehicleData.filter( (el) => {
          return (
                (el.price_rupees >= min) 
            );
        });
      }
    }
  }

  filterYear(){
    if (this.filterVehicles['year'] != ""){
      var split_year = this.filterVehicles['year'].split(" ");
      if (split_year[1] != '+'){
        let min = parseInt(split_year[0])
        let max = parseInt(split_year[2]);
        this.vehicleData = this.vehicleData.filter( (el) => {
          return (
                (el.year >= min) &&
                (el.year < max)
            );
        });
      }
      else{
        let min = parseInt(split_year[0])
        this.vehicleData = this.vehicleData.filter( (el) => {
          return (
                (el.year >= min) 
            );
        });
      }
    }
  }

  filterMileage(){
    if (this.filterVehicles['mileage_miles'] != ""){
      var split_mileage = this.filterVehicles['mileage_miles'].split(" ");
      if (split_mileage[1] != '+'){
        let min = parseInt(split_mileage[0])
        let max = parseInt(split_mileage[2]);
        this.vehicleData = this.vehicleData.filter( (el) => {
          return (
                (el.mileage_miles >= min) &&
                (el.mileage_miles < max)
            );
        });
      }
      else{
        let min = parseInt(split_mileage[0])
        this.vehicleData = this.vehicleData.filter( (el) => {
          return (
                (el.mileage_miles >= min) 
            );
        });
      }
    }
  }

  resetFilters(){
    this.vehicleData = VEHICLEDATA;
  }

  changeVehicleData(){
    this.vehicleData = VEHICLEDATA;
    this.filterCity();
    this.filterMake();
    this.filterColor();
    this.filterVehicleType();
    this.filterRating();
    this.filterPrice();
    this.filterYear();
    this.filterMileage();
  }

}