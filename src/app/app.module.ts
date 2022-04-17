import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleDisplayComponent } from './components/vehicle-display/vehicle-display.component';
import { CommonModule } from '@angular/common';


const routes:Routes = [
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VehiclesComponent,
    VehicleComponent,
    VehicleDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
