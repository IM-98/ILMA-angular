import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { FavoritePokemonService } from 'src/app/services/favorite-pokemon.service';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss']
})
export class DivCardComponent {

  constructor(private favoritePokemonService: FavoritePokemonService) { }

  @Input() tab: Pokemon[] = []

  @Output() deletePokemon = new EventEmitter<number>();
  @Output() displayPokemon = new EventEmitter<number>();
  
  deleteItem(id: number) {
    console.log("deleteItem", id)
    this.deletePokemon.emit(id);
  }

  displayItem(id: number) {
    console.log("displayItem", id)
    this.displayPokemon.emit(id);
  }

  favThisPokemon(pokemon: Pokemon) {
    this.favoritePokemonService.addPokemon(pokemon);
  }

  
}
