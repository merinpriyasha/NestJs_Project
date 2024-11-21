import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
@Module({
  providers: [AppService],
  controllers: [],
  imports: [EmployeesModule],
})
export class AppModule {}
