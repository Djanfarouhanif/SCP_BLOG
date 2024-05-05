import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable }  from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl:string = "http://127.0.0.1:8000/api/signup"
  constructor( private http:HttpClient) { }

  signup(username:string, email:string, password:string, password2:string):Observable<any>{
    return this.http.post<any>(this.apiUrl, {
      username:username,
      email:email,
      password:password,
      password2:password2
    });
  }

}
