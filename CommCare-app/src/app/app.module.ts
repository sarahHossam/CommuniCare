import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DoctorItemSmallComponent } from 'src/app/doctors/doctor-item-small/doctor-item-small.component';
=======
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventListingComponent } from './events/event-listing/event-listing.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
>>>>>>> 95642536bdfde69d2247dd631f1be6bd7edba142

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DoctorItemSmallComponent,
=======
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent
>>>>>>> 95642536bdfde69d2247dd631f1be6bd7edba142
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
