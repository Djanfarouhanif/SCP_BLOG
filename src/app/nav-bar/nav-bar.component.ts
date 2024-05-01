import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ CommonModule , RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    menuValue:boolean = false;
    menu_icon:string = 'menu';
    isMenuOpen:boolean = false;
    isIcon:boolean = false;

    openMenu(){
      this.menuValue=!this.menuValue;
      this.menu_icon = this.menuValue? 'close': 'menu';
      this.isIcon = !this.isIcon
      


    }
    closeMenu(){
      this.menuValue = false;
      this.menu_icon = "menu";
      this.isMenuOpen = false;
      this.isIcon = !this.isIcon
  
    }
      
}



