import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getDataForView(): any {
    // Aquí va tu lógica para obtener o procesar datos
    return 'Hello from NestJS Service' ;
  }
}
