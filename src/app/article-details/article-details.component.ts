import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { NavBarComponent } from '../nav-bar/nav-bar.component'
import { FilterComponent } from '../filter/filter.component'
import { FooterComponent } from '../footer/footer.component'


@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [RouterLink, NavBarComponent  , FilterComponent , FooterComponent],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent {

}
