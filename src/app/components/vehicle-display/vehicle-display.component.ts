import { Component, OnInit, Input} from '@angular/core';
import { Vehicle } from '../../vehicle';

@Component({
  selector: 'app-vehicle-display',
  templateUrl: './vehicle-display.component.html',
  styleUrls: ['./vehicle-display.component.css']
})
export class VehicleDisplayComponent implements OnInit {
  @Input() vehicle_data:Vehicle;

  constructor() { 
    this.vehicle_data = {
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
    }
  }

  ngOnInit(): void {

  }

}
