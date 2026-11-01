import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateAppDto } from './dto/create-app.dto.js';
import { UpdateAppDto } from './dto/update-app.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() createAppDto: CreateAppDto) {
    return this.appService.create(createAppDto);
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppDto: UpdateAppDto) {
    return this.appService.update(+id, updateAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }
}
