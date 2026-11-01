import { Injectable } from '@nestjs/common';
import { CreateTerremotoDto } from './dto/create-terremoto.dto.js';
import { UpdateTerremotoDto } from './dto/update-terremoto.dto.js';

@Injectable()
export class TerremotosService {
  create(createTerremotoDto: CreateTerremotoDto) {
    return 'This action adds a new terremoto';
  }

  findAll() {
    return `This action returns all terremotos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} terremoto`;
  }

  update(id: number, updateTerremotoDto: UpdateTerremotoDto) {
    return `This action updates a #${id} terremoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} terremoto`;
  }
}
