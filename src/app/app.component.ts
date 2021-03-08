import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listitem: any;
  tested_total: any;
  apiServerData: any;
  description: any;
  price: number;
  item: any;
  
  

  
  title = 'newapp1';
  constructor(private appService: AppService) {
    this.apiServerData = [];
    this.listitem = [];
    this.price = 0;
    this.appService.getCovidSummary().subscribe(profile => {
     
      this.apiServerData = profile.tested_positive;
      this.listitem = profile.tested_negative;
      this.tested_total = profile.tested_total;
    })
    
  
    
  }
  addItem() {
    
    if (this.item) {
      this.listitem.push({ product: this.item, price: this.price, description: this.description });
     
      this.item = "";
      this.price = 0;
      this.description = "";
    
    }

  
  }
  

indexremove(index: number) {
    this.listitem.splice(index, 1);

  }
}
