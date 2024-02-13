import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service';
import { IPokemon, IPokemonInfo } from '../interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public pokemon: IPokemon[] = [];
  public filteredPokemon: IPokemon[] = [];
  public filtroNombre = '';
  public infoPokemon: IPokemonInfo | undefined;

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this.getAllPokemon();
  }

  async getAllPokemon() {
    const response = await this._pokemonService.getPokemon();
    response.json().then(resp => {
      this.pokemon = resp.results;
      this.filteredPokemon = this.pokemon;
    }).catch((err) =>
      console.log('Error: ', err)
    );
  }

  async showDetailInfoPokemon(pkName: string) {
      // const urlPSN = this._pokemonService.url+'/'+pkName;
      // console.log(urlPSN);
      const response  = await this._pokemonService.getPokemonInfo(pkName);
      response.json().then(resp => {
        this.infoPokemon = resp;
        console.log('Pokemones, ', resp);
      }).catch((err) =>
        console.log('Error: ', err)
      );
  }

  filterPokemon() {
    if (!this.filtroNombre) {
      this.filteredPokemon = this.pokemon;
      console.log(this.filteredPokemon);
    } else {
      console.log(this.filteredPokemon);
      this.filteredPokemon = this.pokemon.filter(pk =>
        pk.name.toLowerCase().includes(this.filtroNombre.toLowerCase())
      );
    }
  }
}
