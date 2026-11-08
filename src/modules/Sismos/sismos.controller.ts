import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SismosService } from './sismos.service.js';
import { CreateSismoDto } from './dto/create-sismo.dto.js';
import { UpdateSismoDto } from './dto/update-sismo.dto.js';

@Controller('sismos')
export class SismosController {
  constructor(private readonly sismosService: SismosService) {}

  @Post()
  create(@Body() createSismoDto: CreateSismoDto) {
    return this.sismosService.create(createSismoDto);
  }

  @Get()
  findAll() {
    return this.sismosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sismosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSismoDto: UpdateSismoDto) {
    return this.sismosService.update(+id, updateSismoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sismosService.remove(+id);
  }
}
