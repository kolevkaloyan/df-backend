import { Controller, Post, Get, Req, Body } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './departments.entity';

@Controller('departments')
export class DapartmentsController {
  constructor(private departmentService: DepartmentService) {}

  @Post('/addDepartment')
  async addNew(@Body('name') name: string) {
    return this.departmentService.addDepartment(
        {
         name,
        });
  }

  @Get()
  getAll(@Req() request: Request): Promise<Department[]> {
    return this.departmentService.findAll() 
  }

  @Get('/departmentName')
  getUsers(@Req() request: Request): string {
    return 'This returns all users in the given department';
  }
}
