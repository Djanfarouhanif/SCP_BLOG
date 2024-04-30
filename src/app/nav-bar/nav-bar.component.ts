import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    menuValue:boolean = false;
    menu_icon:string = 'black'

    openMenu(){
      this.menuValue=!this.menuValue;
      
    }
      
      
}



