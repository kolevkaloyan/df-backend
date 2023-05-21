import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DapartmentsController } from './departments.controller';
import { DepartmentService } from './department.service';
import { Department } from './departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  providers: [DepartmentService],
  controllers: [DapartmentsController]
})
export class DepartmentsModule {}