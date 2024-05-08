import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable }  from 'rxjs'
import { Article, ArticleComment } from './article'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl  = 'http://localhost:8000/api';
  private detailsUrl:string = 'http://localhost:8000/api/article_post'

  constructor(private http:HttpClient){}

    getArticles(): Observable<Article[]> {
      return this.http.get<Article[]>(this.apiUrl)
    };

    getDetailsArticle(id:string): Observable<ArticleComment> {
      const url = `${this.detailsUrl}/${id}`;
      return this.http.get<ArticleComment>(url)
    }
    
}


