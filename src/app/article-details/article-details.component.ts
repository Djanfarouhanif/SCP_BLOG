import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router'
import { NavBarComponent } from '../nav-bar/nav-bar.component'
import { FilterComponent } from '../filter/filter.component'
import { FooterComponent } from '../footer/footer.component'
import { ArticleService } from '../article.service'
import { CommonModule }  from '@angular/common'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [ CommonModule ,RouterLink, NavBarComponent  , FilterComponent , FooterComponent, HttpClientModule],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css',
  providers: [ArticleService]
})
export class ArticleDetailsComponent {
    articles: any[] = [];

    constructor(private articleService:ArticleService){}

    ngOnInit(): void {
        this.articleService.getArticles().subscribe(data=>{
          this.articles = data
          console.log(this.articles)
       })

       
         }

}
