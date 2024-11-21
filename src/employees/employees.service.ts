import { Injectable } from '@nestjs/common';
import { Employee, EmployeeTier } from './Employee.module';
import { v1 as uuid } from 'uuid';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(
    firstName: string,
    lastName: string,
    designation: string,
    nearCity: string,
    tier: EmployeeTier,
  ) {
    const employee = {
      id: uuid(),
      firstName,
      lastName,
      designation,
      nearCity,
      tier,
    };

    this.employees.push(employee);
    return this.employees;
  }
}
