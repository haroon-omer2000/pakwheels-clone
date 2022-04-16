import { Component, OnInit } from '@angular/core';
import { FilterVehiclesService } from 'src/app/services/filter-vehicles.service';
import { VehiclesComponent } from '../vehicles/vehicles.component';
//import { FilterDataService } from 'src/app/services/filter_data';

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
  price_ranges = ['500,000 Rs - 2,000,000 Rs', '2,000,000 Rs - 5,000,000 Rs', '5,000,000 Rs - 10,000,000 Rs','10,000,000 +']
  years = ['2000 - 2005', '2006 - 2010', '2011 - 2015', '2016 - Now']
  mileages = ['0 - 2500 miles', '2500 - 5000 miles', '5000 - 7500 miles', '7500+ miles']
  colors = ['Black', 'White', 'Red', 'Gray']
  vehicle_types = ['Car', 'Bike']
  ratings = [1, 2, 3, 4 ,5]

  constructor(private filterService: FilterVehiclesService, private vehiclesService: VehiclesComponent) { }

  ngOnInit(): void {
  }

  filterCity(city:string){
    console.log('header filter clicked')
    console.log('header',city);
    this.filterService.addFilter('City',city);
  }
 
  changeData(){
    console.log('Heder change data clicked');
    this.filterService.changeData();
    console.log('veicle service temp 1 called from header clicked');
    this.vehiclesService.temp1();
  }
}
