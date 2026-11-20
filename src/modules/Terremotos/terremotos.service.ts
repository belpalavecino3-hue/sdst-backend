import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTerremotoDto } from './dto/create-terremoto.dto.js';
import { UpdateTerremotoDto } from './dto/update-terremoto.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TerremotosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTerremotoDto) {
    return this.prisma.terremotos.create({ data: dto });
  }

  async findAll() {
    return this.prisma.terremotos.findMany();
  }

  async findOne(id: number) {
    const terremoto = await this.prisma.terremotos.findUnique({ where: { id } });

    if (!terremoto) {
      throw new NotFoundException(`No existe un terremoto con id ${id}.`);
    }

    return terremoto;
  }

  async update(id: number, dto: UpdateTerremotoDto) {
    await this.findOne(id);

    return this.prisma.terremotos.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.terremotos.delete({ where: { id } });
  }
}
