import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User, UserRoles } from './users/user.entity';
import { Departments } from './departments/departments.entity';
import { DepartmentsModule } from './departments/departments.module';
import { DapartmentsController } from './departments/departments.controller';



@Module({
  imports: [UsersModule, DepartmentsModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ERP-DB',
      entities: [User, UserRoles, Departments],
      synchronize: true,
    }),
    ],
  controllers: [AppController, DapartmentsController],
  providers: [AppService],
})
export class AppModule {}
