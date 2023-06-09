import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pokemonFavorite/home.component';
import { PokemonsComponent } from './components/pokemonsList/pokemons.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemonList', component: PokemonsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
