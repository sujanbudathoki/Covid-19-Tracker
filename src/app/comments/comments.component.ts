import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  apiServerData: any[];
  constructor(private appService: AppService) {
    this.apiServerData = [];
    this.appService.getComments().subscribe(user => {
      this.apiServerData = user;
    }
    );
  }

  ngOnInit(): void {
  }

}
