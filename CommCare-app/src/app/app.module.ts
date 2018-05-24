import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HospitalListingComponent } from './hospitals/hospital-listing/hospital-listing.component';
import {HospitalitemComponent} from './hospitals/hospital-listing/hospitalitem/hospitalitem.component';
import {HospitalsComponent} from './hospitals/hospitals.component';
import {HospitalDetailsComponent} from './hospitals/hospital-details/hospital-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HospitalListingComponent,
    HospitalitemComponent,
    HospitalsComponent,
    HospitalDetailsComponent 
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
