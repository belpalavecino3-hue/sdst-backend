import { Module } from '@nestjs/common';
import { HospitalesService } from './hospitales.service.js';
import { HospitalesController } from './hospitales.controller.js';

@Module({
  controllers: [HospitalesController],
  providers: [HospitalesService],
})
export class HospitalesModule {}
