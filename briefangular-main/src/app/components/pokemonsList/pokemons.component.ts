import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetinfoservicesService } from 'src/app/services/getinfoservices.service';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  constructor(private getInfos: GetinfoservicesService){}

  pokemonSelected?:Pokemon
  tab: Pokemon[] = []
  filteredList: Pokemon[] = []
  nameFilter = ''

  getPokemonList(){
    this.getInfos.getAllPokemon().subscribe((data: Pokemon[]) => {
      this.tab = data
      this.filteredList = data;
    })
  }

  deletePokemonSelected(id: number) {
    this.tab = this.tab.filter(pokemon => pokemon.id !== id);
    this.filteredList = this.filteredList.filter(pokemon => pokemon.id !== id);
    this.pokemonSelected = undefined;
  }

  displayPokemonSelected(id: number) {
    this.pokemonSelected = this.tab.find(pokemon => pokemon.id === id);
    this.pokemonSelected = this.filteredList.find(pokemon => pokemon.id === id);
    console.log(this.pokemonSelected)
  }

  modifyThisPokemon(updatedPokemon: Pokemon){
    this.pokemonSelected = updatedPokemon;
  }

  filterPokemons() {
    console.log(this.nameFilter)
    this.filteredList = this.tab.filter(
      (pokemon) =>
        (this.nameFilter == '' || pokemon.name.toLowerCase().includes(this.nameFilter.toLowerCase()))
    );
  }

  ngOnInit(): void {
    this.getPokemonList();
  }
}