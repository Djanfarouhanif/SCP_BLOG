import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable }  from 'rxjs'
import { Article } from './article'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl  = 'http://localhost:8000/api'

  constructor(private http:HttpClient){}

    getArticles(): Observable<Article[]> {
      return this.http.get<Article[]>(this.apiUrl)
    };
    
}


