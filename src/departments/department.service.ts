import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './departments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentsRepositiry: Repository<Department>,
  ) {}

  findOne(id: number): Promise<Department | null> {
    return this.departmentsRepositiry.findOneBy({ id });
  }

  findAll(): Promise<Department[]> {
    return this.departmentsRepositiry.find();
  }

  async addDepartment(department: any): Promise<Department> {
    return this.departmentsRepositiry.save(department);
  }
}
