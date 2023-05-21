import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Department } from 'src/departments/departments.entity';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  providers: [UserService, RolesService],
  controllers: [UserController]
})
export class UsersModule {}
