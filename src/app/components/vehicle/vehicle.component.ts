import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from 'src/app/vehicle';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  @Input() vehicle: Vehicle;
  @Output() showVehicle = new EventEmitter();

  constructor() {
    this.vehicle = {
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
  }

  ngOnInit(): void {
  }

  showDetails(){
    this.showVehicle.emit(this.vehicle)
  }

}
