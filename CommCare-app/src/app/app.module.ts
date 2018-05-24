import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DoctorScheduleComponent} from 'src/app/doctor-schedule/doctor-schedule.component';
import { OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { DepartmentsModule } from 'src/app/departments/departments.module';
import { DoctorItemSmallComponent } from 'src/app/doctors/doctor-item-small/doctor-item-small.component';
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventListingComponent } from './events/event-listing/event-listing.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { PrescriptionComponent } from 'src/app/prescription/prescription.component';
import { NavDoctorComponent } from 'src/app/doctors/Nav-doctor/Nav-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorScheduleComponent,
    DoctorItemSmallComponent,
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent,
    PrescriptionComponent,
    NavDoctorComponent

  ],
  imports: [
    BrowserModule ,
    DepartmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
