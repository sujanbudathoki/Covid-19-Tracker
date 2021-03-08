import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  apiServerData: any[]
  constructor(private appService: AppService) {
    this.apiServerData = [];
    this.appService.getTodos().subscribe(
      user => {
        this.apiServerData = user;
      });

  }

  ngOnInit(): void {
  }

}
