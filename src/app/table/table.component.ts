import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  apiserverData: any[];
  constructor(private appService: AppService) {
    this.apiserverData = [];
    this.appService.getTable().subscribe(user => {
      this.apiserverData = user;
    })}

  ngOnInit(): void {
  }

}
