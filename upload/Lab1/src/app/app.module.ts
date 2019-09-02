import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './Mobile/mobile.component';
import { BasicPhoneComponent } from './BasicPhone/basic-phone.component';
import { SmartPhoneComponent } from './SmartPhone/smart-phone.component';
import { AddEmployeeComponent } from './Employee/AddEmployee/add-employee.component';
import { HomeComponent } from './Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    BasicPhoneComponent,
    SmartPhoneComponent,
    AddEmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
