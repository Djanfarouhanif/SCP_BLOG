import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ NavBarComponent, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [AuthServiceService]
})
export class SignupComponent implements OnInit{

      constructor(private authservice:AuthServiceService){
        console.log(this.authservice)
      }
      ngOnInit():void{
  

      }
      signup(username:string, email:string, password:string, password2:string): void{
        
        this.authservice.signup(username, email, password, password2).subscribe(response =>{
          console.log(response);
        }, error =>{ console.log(error)});
         
      };

      
}
