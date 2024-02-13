import { Injectable } from '@angular/core';
import { API_URL_POKEMON } from '../api/global';

@Injectable({ providedIn: 'root' })

export class PokemonService {
    public url: string = API_URL_POKEMON;

    constructor() {
        // this.url = API_URL_POKEMON+'pokemon';

    }

    async getPokemon() {
        return await fetch(`${API_URL_POKEMON}`, { method: 'GET' });
    }

    async getPokemonInfo(pok?: string) {
        return await fetch(`${API_URL_POKEMON}/${ pok }`, { method: 'GET' });
    }
}