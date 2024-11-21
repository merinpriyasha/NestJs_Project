import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Get()
  getAllEmployees() {
    return this.employeeService.getAllEmployees;
  }

  @Post()
  createEmployee(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('designation') designation: string,
    @Body('nearCity') nearCity: string,
    @Body('tier') tier: number,
  ) {
    return this.employeeService.createEmployee(
      firstName,
      lastName,
      designation,
      nearCity,
      tier,
    );
  }

  @Post()
  createEmployee2(@Body() request) {
    return this.employeeService.createEmployee(
      request.firstName,
      request.lastName,
      request.designation,
      request.nearCity,
      request.tier,
    );
  }
}
