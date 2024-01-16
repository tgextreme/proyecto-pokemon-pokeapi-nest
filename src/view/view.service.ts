import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ViewService {
  async getPokemons() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    return response.data.results;
  }
  async getPokemon(url: string) {
    const response = await axios.get(url);
    return response.data;
  }
}
