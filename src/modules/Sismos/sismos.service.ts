import { Injectable } from '@nestjs/common';
import { CreateSismoDto } from './dto/create-sismo.dto.js';
import { UpdateSismoDto } from './dto/update-sismo.dto.js';

@Injectable()
export class SismosService {
  create(createSismoDto: CreateSismoDto) {
    return 'This action adds a new sismo';
  }

  findAll() {
    return `This action returns all sismos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sismo`;
  }

  update(id: number, updateSismoDto: UpdateSismoDto) {
    return `This action updates a #${id} sismo`;
  }

  remove(id: number) {
    return `This action removes a #${id} sismo`;
  }
}
