import { Injectable } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Injectable({
  providedIn: 'root'
})
export class FavoritePokemonService {

  constructor() { }

  favoritePokemonList: Pokemon[] = [];

  addPokemon(pokemon: Pokemon) {
    this.favoritePokemonList.push(pokemon);
  }

  removePokemon(pokemonId: number) {
    this.favoritePokemonList = this.favoritePokemonList.filter(p => p.id !== pokemonId);
  }

  getFavoritePokemonList() {
    return this.favoritePokemonList;
  }

}
