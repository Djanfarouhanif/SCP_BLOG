import { Component, OnInit} from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FilterComponent } from '../filter/filter.component';
import { FooterComponent } from '../footer/footer.component';
import { Article }  from '../article'
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule }  from '@angular/common'
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NavBarComponent, HttpClientModule,CommonModule ,FilterComponent, FooterComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
  providers: [ArticleService]
})

export class ArticleComponent {
 
    
   

}
