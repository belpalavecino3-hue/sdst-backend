import { Module } from '@nestjs/common';
import { AppService } from './app.service.js';
import { AppController } from './app.controller.js';
import { EmergenciasModule } from '../Emergencias/emergencias.module.js';
import { HospitalesModule } from '../Hospitales/hospitales.module.js';
import { LoginModule } from '../Login/login.module.js';
import { TerremotosModule } from '../Terremotos/terremotos.module.js';
import { TiposSismosModule } from '../TiposSismos/tipos-sismos.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { UsersModule } from '../Users/users.module.js';

@Module({
  imports: [EmergenciasModule,
     HospitalesModule,
     LoginModule,
     TerremotosModule,
     TiposSismosModule,
     AuthModule,
     UsersModule
   ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
