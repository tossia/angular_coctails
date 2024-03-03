import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails?: Cocktail[];
  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter<
    number
  >();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}

