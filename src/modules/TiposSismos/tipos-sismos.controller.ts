import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposSismosService } from './tipos-sismos.service.js';
import { CreateTiposSismoDto } from './dto/create-tipos-sismo.dto.js';
import { UpdateTiposSismoDto } from './dto/update-tipos-sismo.dto.js';

@Controller('tipos-sismos')
export class TiposSismosController {
  constructor(private readonly tiposSismosService: TiposSismosService) {}

  @Post()
  create(@Body() createTiposSismoDto: CreateTiposSismoDto) {
    return this.tiposSismosService.create(createTiposSismoDto);
  }

  @Get()
  findAll() {
    return this.tiposSismosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposSismosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposSismoDto: UpdateTiposSismoDto) {
    return this.tiposSismosService.update(+id, updateTiposSismoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposSismosService.remove(+id);
  }
}
