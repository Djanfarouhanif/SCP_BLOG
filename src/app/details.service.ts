import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article }  from './article'


@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private apiUrl = "http://localhost:8000/api/article_post"

  constructor(
    private http:HttpClient
  ) { }

  getArticle(id: string): Observable<Article>
  {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Article>(url)
  }
}
