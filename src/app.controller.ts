import { Controller, Get, Post,Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postAll(): string {
    return "post data";
  }

  @Put()
  update(): string {
    return "put data";
  }

  @Delete ()
  Delete(): string {
    return "delete data";
  }
}

