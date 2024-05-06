import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse }  from '@angular/common/http'
import { Observable, throwError }  from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl:string = "http://127.0.0.1:8000/api/signup"
  constructor( private http:HttpClient) { }

  signup(username:string ,email:string, password:string, password2:string):Observable<any>{
    const body = {
      'username': username,
      'email': email,
      'password': password,
      'password2': password2
    }

    return this.http.post<any>(this.apiUrl, body)
     .pipe(
       catchError( this.handleError)
     );
  }
   private handleError(error:HttpErrorResponse){
     if(error.error instanceof ErrorEvent){
       console.error("Une erreure s\'est produit :", error.error.message)
     }else{
       console.error(
        `Erreur de backend: ${error.status}` + `body: ${JSON.stringify(error.error)}`
       );
     };

     return throwError('Une erreur s\est produit .Veuilles reessayer')
   }

}
