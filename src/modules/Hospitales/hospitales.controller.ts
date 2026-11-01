import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HospitalesService } from './hospitales.service.js';
import { CreateHospitaleDto } from './dto/create-hospitale.dto.js';
import { UpdateHospitaleDto } from './dto/update-hospitale.dto.js';

@Controller('hospitales')
export class HospitalesController {
  constructor(private readonly hospitalesService: HospitalesService) {}

  @Post()
  create(@Body() createHospitaleDto: CreateHospitaleDto) {
    return this.hospitalesService.create(createHospitaleDto);
  }

  @Get()
  findAll() {
    return this.hospitalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHospitaleDto: UpdateHospitaleDto) {
    return this.hospitalesService.update(+id, updateHospitaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospitalesService.remove(+id);
  }
}
