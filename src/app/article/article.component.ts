import { Component, OnInit} from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FilterComponent } from '../filter/filter.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NavBarComponent, FilterComponent, FooterComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{

  ngOnInit(): void {
    
  }

}
