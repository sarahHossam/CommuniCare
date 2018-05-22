import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DoctorScheduleComponent} from 'src/app/doctor-schedule/doctor-schedule.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
