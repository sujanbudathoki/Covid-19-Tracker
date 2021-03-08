import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import {Observable}   from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
    getCovidSummary(): Observable <any> {

      return this.http.get("https://nepalcorona.info/api/v1/data/nepal");


    }
    getProfile(): Observable <any> {
      return this.http.get("http://newsapi.org/v2/everything?domains=wsj.com&apiKey=cc149ee05a224d27a3e11481072bd6b7");

    }
    getSelectedComments(id: number): Observable <any> {
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${{ id }}/comments`);
    }
    getTable(): Observable <any> {
      return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
    getComments(): Observable < any > {
      return this.http.get("https://jsonplaceholder.typicode.com/comments");

    }
    getTodos(): Observable < any > {
      return this.http.get("https://jsonplaceholder.typicode.com/todos");
    }
    getPosts(): Observable < any > {
      return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }
  }



