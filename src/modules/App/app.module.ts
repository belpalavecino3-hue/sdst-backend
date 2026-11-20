import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from '../auth/auth.module.js';
import { EmergenciasModule} from '../Emergencias/emergencias.module.js';
import { HospitalesModule} from '../Hospitales/hospitales.module.js';
import { TerremotosModule} from '../Terremotos/terremotos.module.js';
import { UsersModule } from '../Users/users.module.js';
import { SismosModule} from '../Sismos/sismos.module.js';
import { PrismaModule } from '../prisma/prisma.module.js';



@Module({
  imports: [
    PrismaModule,
    AuthModule,
    EmergenciasModule,
    HospitalesModule,
    TerremotosModule,
    UsersModule,
    SismosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}