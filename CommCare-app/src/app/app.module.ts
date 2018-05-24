import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DoctorScheduleComponent} from 'src/app/doctor-schedule/doctor-schedule.component';
import { OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { DepartmentsModule } from 'src/app/departments/departments.module';
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventListingComponent } from './events/event-listing/event-listing.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AssignShiftComponent } from './assign-Task/assign-shift/assign-shift.component';
import { AssignTaskComponent } from './assign-Task/assign-Task.component';
import { DoctorsModule } from './doctors/doctors.module';

@NgModule({
  declarations: [
    AppComponent,
    DoctorScheduleComponent,
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent,
    AssignShiftComponent,
    AssignTaskComponent
   ],
  imports: [
    BrowserModule ,
    DepartmentsModule,
    DoctorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
