import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HospitalesService } from './hospitales.service.js';
import { CreateHospitalDto } from './dto/create-hospital.dto.js';
import { UpdateHospitalDto } from './dto/update-hospital.dto.js';

@Controller('hospitales')
export class HospitalesController {
  constructor(private readonly hospitalesService: HospitalesService) {}

  @Post()
  create(@Body() createHospitalDto: CreateHospitalDto) {
    return this.hospitalesService.create(createHospitalDto);
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
  update(@Param('id') id: string, @Body() updateHospitalDto: UpdateHospitalDto) {
    return this.hospitalesService.update(+id, updateHospitalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospitalesService.remove(+id);
  }
}
