import { Component, OnInit, ChangeDetectionStrategy, Input, NgModule} from '@angular/core';
import { VehicledataService } from 'src/app/services/vehicledata.service';
import { Vehicle } from 'src/app/vehicle';
import { filterObject } from 'src/app/filterInterface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class VehiclesComponent implements OnInit {
  @Input() vehicles: Vehicle[] = [];
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

  constructor(private vehicleDataService: VehicledataService ) { 
  }

  ngOnInit(): void {
    this.vehicleDataService.getVehicleData().subscribe((vehicles) => this.vehicles = vehicles);   
  }

  back(){
    this.show_vehicle = false;
  }

  show($event: Vehicle){
    this.show_vehicle = true;
    this.vehicle_data = $event;
  }
  
  changeVehicles(){
    this.vehicleDataService.getVehicleData().subscribe((vehicles) => {this.vehicles = vehicles;});    
  }

  changeData(){
    this.vehicleDataService.changeVehicleData();
    this.changeVehicles();
  }

  resetFilters(){
    this.vehicleDataService.resetFilters();
    this.changeVehicles();
  }

}
