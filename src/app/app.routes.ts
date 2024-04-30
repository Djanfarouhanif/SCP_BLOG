import { Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleComponent } from './article/article.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [

    { 'path' : '', component: ArticleDetailsComponent},
    { 'path' : 'article-detaile',  component: ArticleComponent},
    { 'path': 'signup', component: SignupComponent},
    { 'path': 'login', component: SigninComponent}
    
];


