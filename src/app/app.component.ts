import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { HeaderComponent } from './header/header.component';
import { SelectedDirective } from './shared/directives/selected.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  imports: [
    RouterOutlet,
    FormsModule,
    AppComponent,
    HeaderComponent,
    CocktailDetailsComponent,
    CocktailListComponent,
    CocktailContainerComponent,

  ],
  providers: [SelectedDirective],
})
export class AppComponent {
  title: any;
}
