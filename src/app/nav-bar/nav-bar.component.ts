import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    menuValue:boolean = false;
    menu_icon:string = 'menu';
    isMenuOpen:boolean = false

    openMenu(){
      this.menuValue=!this.menuValue;
      this.menu_icon = this.menuValue? 'close': 'menu';
      this.isMenuOpen = !this.isMenuOpen;


    }
    closeMenu(){
      this.menuValue = false;
      this.menu_icon = "menu";
      this.isMenuOpen = false;
  
    }
      
}



