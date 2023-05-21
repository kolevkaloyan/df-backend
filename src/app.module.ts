import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Department } from './departments/departments.entity';
import { DepartmentsModule } from './departments/departments.module';
import { DapartmentsController } from './departments/departments.controller';
import { UserService } from './users/user.service';
import { Role } from './roles/roles.entity';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/role.module';
import { RolesService } from './roles/roles.service';
import { UserController } from './users/user.controller';
import { DepartmentService } from './departments/department.service';



@Module({
  imports: [UsersModule, DepartmentsModule, RolesModule,
    TypeOrmModule.forFeature([Role, Department, User]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ERP-DB1',
      entities: [User, Department, Role],
      synchronize: true,
    }),
    ],
  controllers: [DapartmentsController, RolesController, UserController],
  providers: [RolesService, DepartmentService, UserService]
})
export class AppModule {}
