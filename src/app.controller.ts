import { Controller, Get, HttpCode } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(200)
  findAll(): any {
    return { 
      message: 'This action returns all cats', 
      count: 2,
      catBreeds: ["Persian", "British Shorthair", "Maine Coon"], 
      cats: [
        { name: 'Kitty', age: 2 },
        { name: 'Tom', age: 5 }
      ]
    };
  }
}