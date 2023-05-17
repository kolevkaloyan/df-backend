import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Departments } from "./departments.entity";
import { Repository } from "typeorm";

@Injectable()
export class DepartmentsService {
    constructor(
        @InjectRepository(Departments)
        private departmentsRepositiry:Repository<Departments>
    ) {}

    findOne(id: number): Promise<Departments | null> {
        return this.departmentsRepositiry.findOneBy({ id });
      }

      findAll(): Promise<Departments[]> {
        return this.departmentsRepositiry.find()
      }
}