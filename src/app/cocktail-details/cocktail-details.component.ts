import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent implements OnInit {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://static.750g.com/images/1200-630/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
    description:
      'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, \
       lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda \
       water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed \
       to dicing to unlock oils that will assist with enhancing the minty flavour.',
  };

  constructor() {
    /* TODO document why this constructor is empty */
  }

  ngOnInit(): void {}
}
