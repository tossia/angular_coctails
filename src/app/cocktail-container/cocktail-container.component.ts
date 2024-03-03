import { Component } from '@angular/core';
import { CocktailDetailsComponent } from '../cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from '../cocktail-container/cocktail-list/cocktail-list.component';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
  standalone: true,
  imports: [CocktailListComponent, CocktailDetailsComponent],
})
export class CocktailContainerComponent {
  public cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://static.750g.com/images/1200-630/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    },
    {
      name: 'Cosmopolitan',
      img: 'https://assets.afcdn.com/recipe/20180705/80274_w1024h1024c1cx2378cy1278.webp',
      description:
        'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
    },
    {
      name: 'Mai Tai',
      img: 'https://www.cocktail.fr/wp-content/uploads/2017/05/mai-tai.jpg',
      description:
        'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.',
    },
  ];
  public selectedCocktail: Cocktail = this.cocktails[0];

  constructor() {}

  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }
}
