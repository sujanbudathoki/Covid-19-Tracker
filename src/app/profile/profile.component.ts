import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  apiserverData: any[];
  listitem: any;
  tested_total: any;
  apiData: any;
  constructor(private appService: AppService) {
    this.apiserverData = [];
    this.appService.getCovidSummary().subscribe(a => {
      this.apiData = a.tested_positive;
      this.listitem = a.tested_negative;
      this.tested_total = a.tested_total;
    })
    this.appService.getProfile().subscribe(user => {
      this.apiserverData = user;
    })
   
  }

  ngOnInit(): void {
  }

}
