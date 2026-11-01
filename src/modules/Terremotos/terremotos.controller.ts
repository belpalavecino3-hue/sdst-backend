import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerremotosService } from './terremotos.service.js';
import { CreateTerremotoDto } from './dto/create-terremoto.dto.js';
import { UpdateTerremotoDto } from './dto/update-terremoto.dto.js';

@Controller('terremotos')
export class TerremotosController {
  constructor(private readonly terremotosService: TerremotosService) {}

  @Post()
  create(@Body() createTerremotoDto: CreateTerremotoDto) {
    return this.terremotosService.create(createTerremotoDto);
  }

  @Get()
  findAll() {
    return this.terremotosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terremotosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTerremotoDto: UpdateTerremotoDto) {
    return this.terremotosService.update(+id, updateTerremotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terremotosService.remove(+id);
  }
}
