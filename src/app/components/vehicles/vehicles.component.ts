import { Component, OnInit } from '@angular/core';
import { VehicledataService } from 'src/app/services/vehicledata.service';
import { Vehicle } from 'src/app/vehicle';
import { filterObject } from 'src/app/filterInterface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})

export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [];
  show_vehicle: boolean = false;
  vehicle_data: Vehicle = {
        city: '',
        make: '',
        price_rupees: 0,
        year: 0,
        mileage_miles: 0,
        color: '',
        vehicle_type: '',
        rating: 0,
        title: '',
        image: '',
        transmission: '', // automatice or manual etc
        registered_in: '',
        last_updated: 0,
        seller_contact: '',
        seller_email: '',
        seller_comments: '',
  };
  filterVehicles: filterObject = {"dummy":"dummy"};

  constructor(private vehicleDataService: VehicledataService ) { 
  }

  ngOnInit(): void {
    this.vehicleDataService.getVehicleData().subscribe((vehicles) => this.vehicles = vehicles);
//    this.filterService.getFilter().subscribe((filter) => this.filterVehicles = filter)
    console.log('constructor caled', this.vehicles)
    
  }

  back(){
    this.show_vehicle = false;
  }

  temp($event: Vehicle){
    this.show_vehicle = true;
    this.vehicle_data = $event;
  }

  temp1(){
    //this.filterService.getMessage().subscribe((message) => this.message = message)
    //console.log('aaaaaahh',this.message)
    this.vehicleDataService.getVehicleData().subscribe((vehicles) => {this.vehicles = vehicles; console.log(vehicles,'chand par hun')});
    console.log('idhr agay',this.vehicles);
    // console.log(this.filterVehicles);
    // if (this.filterVehicles["dummy"]!="dummy") {
    //   var filteredVehicles = this.vehicles.filter( (el) => {
    //   return el.city == this.filterVehicles['City'];
    //   });
    //   this.vehicles = filteredVehicles;
    //   console.log(filteredVehicles,'dddd');
    // }
  }

}
