// src/view/view.controller.ts

import { Controller, Get, Render, Query } from '@nestjs/common';
import { ViewService } from './view.service';

@Controller()
export class ViewController {
  constructor(private viewService: ViewService) {}

  @Get()
  @Render('index')
  async root() {
    const pokemons = await this.viewService.getPokemons();
    return { pokemons };
  }
  @Get('/index2')
  @Render('index2')
  async showPokemon(@Query('url') url: string) {
    const pokemon = await this.viewService.getPokemon(decodeURIComponent(url));
    return { pokemon };
  }
}
