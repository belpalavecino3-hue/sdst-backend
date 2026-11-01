import { Injectable } from '@nestjs/common';
import { CreateHospitaleDto } from './dto/create-hospitale.dto.js';
import { UpdateHospitaleDto } from './dto/update-hospitale.dto.js';

@Injectable()
export class HospitalesService {
  create(createHospitaleDto: CreateHospitaleDto) {
    return 'This action adds a new hospitale';
  }

  findAll() {
    return `This action returns all hospitales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hospitale`;
  }

  update(id: number, updateHospitaleDto: UpdateHospitaleDto) {
    return `This action updates a #${id} hospitale`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospitale`;
  }
}
