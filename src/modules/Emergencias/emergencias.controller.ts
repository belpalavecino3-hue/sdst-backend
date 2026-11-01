import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmergenciasService } from './emergencias.service.js';
import { CreateEmergenciaDto } from './dto/create-emergencia.dto.js';
import { UpdateEmergenciaDto } from './dto/update-emergencia.dto.js';

@Controller('emergencias')
export class EmergenciasController {
  constructor(private readonly emergenciasService: EmergenciasService) {}

  @Post()
  create(@Body() createEmergenciaDto: CreateEmergenciaDto) {
    return this.emergenciasService.create(createEmergenciaDto);
  }

  @Get()
  findAll() {
    return this.emergenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emergenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmergenciaDto: UpdateEmergenciaDto) {
    return this.emergenciasService.update(+id, updateEmergenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emergenciasService.remove(+id);
  }
}
