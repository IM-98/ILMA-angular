import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

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
