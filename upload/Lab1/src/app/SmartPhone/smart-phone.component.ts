import { Component, OnInit } from '@angular/core';
import { MobileComponent } from '../Mobile/mobile.component';

@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent extends MobileComponent implements OnInit {

  private mobileType: string;
  constructor(mobileDetails: [number, string, number, string]) {
    super(mobileDetails);
    this.mobileType = mobileDetails[3];
  }

  ngOnInit() {
  }

  printMobileDetails(): void {
    super.printMobileDetails();
    console.log(`Mobile Type : ${this.mobileType}`);
  }

}
