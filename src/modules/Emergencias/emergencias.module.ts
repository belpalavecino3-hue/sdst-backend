import { Module } from '@nestjs/common';
import { EmergenciasService } from './emergencias.service.js';
import { EmergenciasController } from './emergencias.controller.js';

@Module({
  controllers: [EmergenciasController],
  providers: [EmergenciasService],
})
export class EmergenciasModule {}
