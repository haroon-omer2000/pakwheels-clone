import { Component, OnInit } from '@angular/core';
import { FilterVehiclesService } from 'src/app/services/filter-vehicles.service';
import { VehicledataService } from 'src/app/services/vehicledata.service';
import { VehiclesComponent } from '../vehicles/vehicles.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [VehiclesComponent]
})
export class HeaderComponent implements OnInit {
  title = 'PakWheels'
  cities = ['Lahore', 'Islamabad', 'Karachi', 'Faisalabad', 'Gujranwala']
  makes = ['Toyota', 'Audi', 'Mercedes', 'Kia', 'Suzuki', 'Honda']
  price_ranges = ['500,000 - 2,000,000 Rs', '2,000,000 - 5,000,000 Rs', '5,000,000 - 10,000,000 Rs','10,000,000 + Rs']
  years = ['2000 - 2005', '2006 - 2010', '2011 - 2015', '2016 +']
  mileages = ['0 - 2500 miles', '2500 - 5000 miles', '5000 - 7500 miles', '7500 + miles']
  colors = ['Black', 'White', 'Red', 'Gray']
  vehicle_types = ['Car', 'Bike']
  ratings = ["1", "2", "3", "4" ,"5"]

  constructor(private vehiclesDataService: VehicledataService, private vehiclesComponent: VehiclesComponent) { }

  ngOnInit(): void {
  }

  filterCity(city:string){
    this.vehiclesDataService.addFilter('city',city);
  }

  filterMake(make:string){
    this.vehiclesDataService.addFilter('make',make);
  }

  filterRating(rating:string){
    this.vehiclesDataService.addFilter('rating',rating);
  }

  filterColor(color:string){
    this.vehiclesDataService.addFilter('color',color);
  }

  filterVehicleType(vehicle_type:string){
    this.vehiclesDataService.addFilter('vehicle_type',vehicle_type);
  }

  filterPrice(price:string){
    this.vehiclesDataService.addFilter('price_rupees',price);
  }
  
  filterYear(year:string){
    this.vehiclesDataService.addFilter('year',year);
  }

  filterMileage(mileage:string){
    this.vehiclesDataService.addFilter('mileage_miles',mileage);
  }

}
