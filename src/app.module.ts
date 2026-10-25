import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { EmployeesModule } from './modules/employees/employees.module.js';
import { IncidentsModule } from './modules/incidents/incidents.module.js';
import { InspectionsModule } from './modules/inspections/inspections.module.js';
import { ReportsModule } from './modules/reports/reports.module.js';

@Module({
  imports: [AuthModule, UsersModule, EmployeesModule, IncidentsModule, InspectionsModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
