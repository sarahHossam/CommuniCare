import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoctorItemSmallComponent } from 'src/app/doctors/doctor-item-small/doctor-item-small.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorItemSmallComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
