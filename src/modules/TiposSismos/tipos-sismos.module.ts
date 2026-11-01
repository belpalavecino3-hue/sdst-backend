import { Module } from '@nestjs/common';
import { TiposSismosService } from './tipos-sismos.service.js';
import { TiposSismosController } from '../TiposSismos/tipos-sismos.controller.js';

@Module({
  controllers: [TiposSismosController],
  providers: [TiposSismosService],
})
export class TiposSismosModule {}
