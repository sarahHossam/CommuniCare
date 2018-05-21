import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentsModule } from 'src/app/departments/departments.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule ,
    DepartmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
