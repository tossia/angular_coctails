import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';


@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
  standalone: true,
})


export class CocktailDetailsComponent implements OnInit {
  @Input() cocktail!: Cocktail;

  constructor() {}

  ngOnInit(): void {}
}
