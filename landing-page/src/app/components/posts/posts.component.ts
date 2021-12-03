import { Component } from '@angular/core';
import { PokemonData } from 'src/app/interfaces/interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  pokemonData!: PokemonData

  constructor(private PokemonService: PokemonService){
    this.newPokemon()
  }

  newPokemon(){
    this.PokemonService.getPokemon().subscribe(resp => {
      this.pokemonData = resp
      console.log(resp.name)
    })
    
  }

  next(){
    this.newPokemon()
  }

}
