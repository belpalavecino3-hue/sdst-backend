import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { AuthModule } from '../auth/auth.module.js';
import { EmergenciasModule} from '../Emergencias/emergencias.module.js';
import { LoginModule } from '../Login/login.module.js';
import { TerremotosModule} from '../Terremotos/terremotos.module.js';
import { UsersModule } from '../Users/users.module.js';
import { SismosModule} from '../Sismos/sismos.module.js';

@Module({
  imports: [
    AuthModule,
    EmergenciasModule,
    LoginModule,
    TerremotosModule,
    UsersModule,
    SismosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}