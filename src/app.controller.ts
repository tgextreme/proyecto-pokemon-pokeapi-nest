import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /*@Get()
  @Render('index')  // Asegúrate de que 'index' corresponda al nombre de tu archivo EJS.
  root() {
    // Puedes pasar datos a tu plantilla EJS aquí.
    return { message: 'Hello from NestJS' };
  }*/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  @Render('index2')  // Nombre de tu archivo EJS
  root() {
    // Obtén los datos del servicio
    const data = this.appService.getDataForView();
    
    // Pasa los datos a la vista
    return data;
  }
}
