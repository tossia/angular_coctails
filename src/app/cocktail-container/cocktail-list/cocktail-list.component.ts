import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedDirective } from '../../shared/directives/selected.directive';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { CocktailDetailsComponent } from "../cocktail-details/cocktail-details.component";

@Component({
    selector: 'app-cocktail-list',
    templateUrl: './cocktail-list.component.html',
    styleUrls: ['./cocktail-list.component.scss'],
    standalone: true,
    imports: [NgFor, CocktailDetailsComponent, SelectedDirective]
})
export class CocktailListComponent implements OnInit {
  addCocktail() {
    throw new Error('Method not implemented.');
  }
  @Input() public cocktails!: Cocktail[];
  @Input() selectedCocktail!: Cocktail;

  @Output() private changeCocktail: EventEmitter<number> =
    new EventEmitter<number>();
  cocktailService: any;

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
