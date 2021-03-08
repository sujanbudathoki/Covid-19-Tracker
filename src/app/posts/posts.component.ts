import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  appServerData: any[];
  commentDataFactory: any[];
  comments: any[];
  
  loadComments: boolean;
  

  constructor(private appService: AppService) {
    this.appServerData = [];
    this.commentDataFactory = [];
    this.comments = [];

    this.loadComments = false;
    this.appService.getPosts().subscribe(user => {
      this.appServerData = user;

    });
    
    
  }

LoadComments(id : number) {
  this.appService.getSelectedComments(id).subscribe(user => {
    this.commentDataFactory = user;

  });
  console.log(this.commentDataFactory);
}
  ngOnInit(): void {
  }

}
