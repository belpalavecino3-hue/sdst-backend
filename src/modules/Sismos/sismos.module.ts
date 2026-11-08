import { Module } from '@nestjs/common';
import { SismosService } from './sismos.service.js';
import { SismosController } from './sismos.controller.js';

@Module({
  controllers: [SismosController],
  providers: [SismosService],
})
export class SismosModule {}
