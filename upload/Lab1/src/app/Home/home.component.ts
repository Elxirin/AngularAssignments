import { Component, OnInit, Injectable } from '@angular/core';
import { SmartPhoneComponent } from '../SmartPhone/smart-phone.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  mobileDetails1: [number, string, number, string] = [101, "Redmi Note 5 Pro ", 15000, "Smart" ];
  
  ngOnInit(): void {
    let mb: SmartPhoneComponent = new SmartPhoneComponent(this.mobileDetails1);
    mb.printMobileDetails();
  }

}
