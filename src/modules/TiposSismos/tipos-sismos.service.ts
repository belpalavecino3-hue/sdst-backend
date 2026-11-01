import { Injectable } from '@nestjs/common';
import { CreateTiposSismoDto } from './dto/create-tipos-sismo.dto.js';
import { UpdateTiposSismoDto } from './dto/update-tipos-sismo.dto.js';

@Injectable()
export class TiposSismosService {
  create(createTiposSismoDto: CreateTiposSismoDto) {
    return 'This action adds a new tiposSismo';
  }

  findAll() {
    return `This action returns all tiposSismos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposSismo`;
  }

  update(id: number, updateTiposSismoDto: UpdateTiposSismoDto) {
    return `This action updates a #${id} tiposSismo`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposSismo`;
  }
}
