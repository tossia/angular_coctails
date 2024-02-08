import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    AppComponent,
    HeaderComponent,
    CocktailDetailsComponent,
    CocktailListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
