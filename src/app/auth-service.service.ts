import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse }  from '@angular/common/http'
import { Observable, throwError }  from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person }  from './article';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl:string = "http://127.0.0.1:8000/api/signup";
  
  constructor( private http:HttpClient) {
    
   }

  signup(person:Person):Observable<Person>{
    
    const body = JSON.stringify(person)
    const headers = new HttpHeaders().set('content-type','applictaion/json' )
    console.log(body)
    return this.http.post<Person>(this.apiUrl,body, {headers: headers})
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
