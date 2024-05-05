import { Component, OnInit} from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FilterComponent } from '../filter/filter.component';
import { FooterComponent } from '../footer/footer.component';
import { Article, ArticleComment }  from '../article'
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../details.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule }  from '@angular/common';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NavBarComponent, HttpClientModule,CommonModule ,FilterComponent, FooterComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
  providers: [DetailsService]
})

export class ArticleComponent {
 
    article: Article| undefined;

    constructor( private route: Router,
      private details: DetailsService
    ){}
   ngOnInit():void {
    this.getArticleDetails();
   }
   getArticleDetails(): void {
    const id = this.route.url.split('/').pop();
    
    if (id !=null){
      this.details.getArticle(id).subscribe(response=>{
        this.article = response.article;
        console.log(this.article)
      })
    }
   }
}
