import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';
import {FormsModule, NgForm }  from '@angular/forms'
import { Person } from '../article';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ NavBarComponent, HttpClientModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [AuthServiceService]
})
export class SignupComponent implements OnInit{

      constructor(private authservice:AuthServiceService){}
      ngOnInit():void{
  
      }
      signup(username:string ,email:string, password:string, password2:string): void{
        const data:Person = {
          username: username,
          email: email,
          password: password,
          password2: password2
        }
        
        
        this.authservice.signup(data).subscribe(response=>{
          console.log("succes", response);
        }, error =>{
          console.log(error)
        }) 
         
      };
}
