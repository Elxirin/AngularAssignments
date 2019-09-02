import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  protected mobileId: number;
  protected mobileName: string;
  protected mobileCost: number;
  
 
  constructor(mobileDetails: [number, string, number, string]) { 
   this.mobileId = mobileDetails[0];
   this.mobileName = mobileDetails[1];
   this.mobileCost = mobileDetails[2];
  }

  ngOnInit() {
  }

  printMobileDetails(): void {
    console.log(`Mobile ID : ${this.mobileId}`);
    console.log(`Mobile Name : ${this.mobileName}`);
    console.log(`Mobile Cost : ${this.mobileCost}`); 
  }

}
