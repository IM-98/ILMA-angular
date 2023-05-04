import { Component } from '@angular/core';
import { FavoritePokemonService } from '../services/favorite-pokemon.service';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private favoritePokemonService: FavoritePokemonService) {}

  pokemonFavoriteList: Pokemon[] = this.favoritePokemonService.getFavoritePokemonList();

  removeThisPokemon(pokemonId: number) {
    console.log(pokemonId)
    this.favoritePokemonService.removePokemon(pokemonId);
    this.pokemonFavoriteList = this.favoritePokemonService.getFavoritePokemonList();
  }


}
