import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto.js';
import { UpdateHospitalDto } from './dto/update-hospital.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class HospitalesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateHospitalDto) {
    return this.prisma.hospitales.create({ data: dto });
  }

  async findAll() {
    return this.prisma.hospitales.findMany();
  }

  async findOne(id: number) {
    const hospital = await this.prisma.hospitales.findUnique({ where: { id } });

    if (!hospital) {
      throw new NotFoundException(`No existe un hospital con id ${id}.`);
    }

    return hospital;
  }

  async update(id: number, dto: UpdateHospitalDto) {
    await this.findOne(id);

    return this.prisma.hospitales.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.hospitales.delete({ where: { id } });
  }
}
