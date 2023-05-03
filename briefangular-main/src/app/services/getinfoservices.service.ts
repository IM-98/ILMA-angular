import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../Pokemon';

@Injectable({
  providedIn: 'root'
})
export class GetinfoservicesService {

  API_URL : string = "https://pokebuildapi.fr/api/v1/pokemon/limit/10"

  constructor(private http: HttpClient) { }
  
  getAllPokemon():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.API_URL)
  }

}
