import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonData } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(
    private http: HttpClient
  ) { 
  }
  getPokemon(){
    const rdm = Math.floor(Math.random() * (500 - 1 + 1) + 1)
    
    const _url = `https://pokeapi.co/api/v2/pokemon/${rdm}`

    let headers = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get<PokemonData>(_url,{
        headers: headers
      })
  }
}
