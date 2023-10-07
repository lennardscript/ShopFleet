import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return 'Hola, mundo! Desde el backend de ShopFleet';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
