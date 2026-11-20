import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateSismoDto } from './dto/create-sismo.dto.js';
import { UpdateSismoDto } from './dto/update-sismo.dto.js';

@Injectable()
export class SismosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSismoDto) {
    return this.prisma.sismos.create({ data: dto });
  }

  findAll() {
    return this.prisma.sismos.findMany();
  }

  async findOne(id: number) {
    const sismo = await this.prisma.sismos.findUnique({ where: { id } });

    if (!sismo) {
      throw new NotFoundException(`No existe una categoría de sismo con id ${id}.`);
    }

    return sismo;
  }

  async update(id: number, dto: UpdateSismoDto) {
    await this.findOne(id);

    return this.prisma.sismos.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.sismos.delete({ where: { id } });
  }
}