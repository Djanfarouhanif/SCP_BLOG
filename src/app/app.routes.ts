import { Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleComponent } from './article/article.component'


export const routes: Routes = [

    { 'path' : '', component: ArticleDetailsComponent},
    { 'path' : 'article-detaile',  component: ArticleComponent},
   
    
];


