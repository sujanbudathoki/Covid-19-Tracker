import { Routes } from "@angular/router";
import { from } from 'rxjs';

import { ProfileComponent } from "./profile/profile.component";
import { TableComponent } from "./table/table.component";
import { TodosComponent } from "./todos/todos.component";
import { PostsComponent } from "./posts/posts.component";
import { CommentsComponent } from "./comments/comments.component";
import { JoinComponent } from './join/join.component';
import { MessageComponent } from './message/message.component';

export const appRoute: Routes = [


  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "todos",
    component: TodosComponent
  },
  {
    path: "post",
    component: PostsComponent
  },
  {
    path: "comments",
    component: CommentsComponent
  },
  {
    path: "join",
    component:JoinComponent
  },
  {
    path: "message",
    component: MessageComponent
  }

]

