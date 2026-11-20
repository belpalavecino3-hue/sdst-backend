import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmergenciaDto } from './dto/create-emergencia.dto.js';
import { UpdateEmergenciaDto } from './dto/update-emergencia.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class EmergenciasService {
  constructor(private readonly prisma: PrismaService) {}

 async create(dto: CreateEmergenciaDto) {
    return this.prisma.emergencias.create({ data: dto });
  }

  findAll() {
    return this.prisma.emergencias.findMany();
  }

  async findOne(id: number) {
    const emergencia = await this.prisma.emergencias.findUnique({ where: { id } });

    if (!emergencia) {
      throw new NotFoundException(`No existe una emergencia con id ${id}.`);
    }

    return emergencia;
  }

  async update(id: number, dto: UpdateEmergenciaDto) {
    await this.findOne(id);

    return this.prisma.emergencias.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.emergencias.delete({ where: { id } });
  }
}
