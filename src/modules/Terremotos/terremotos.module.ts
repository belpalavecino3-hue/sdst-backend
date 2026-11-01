import { Module } from '@nestjs/common';
import { TerremotosService } from './terremotos.service.js';
import { TerremotosController } from './terremotos.controller.js';

@Module({
  controllers: [TerremotosController],
  providers: [TerremotosService],
})
export class TerremotosModule {}
