import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.schema';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() employee: Employee): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Put(':employeeId')
  async update(@Param('employeeId') employeeId: string, @Body() updatedEmployee: Employee): Promise<Employee> {
    return this.employeeService.update(employeeId, updatedEmployee);
  }

  @Patch(':employeeId')
  async partialUpdate(@Param('employeeId') employeeId: string, @Body() updatedFields: Partial<Employee>): Promise<Employee> {
    return this.employeeService.partialUpdate(employeeId, updatedFields);
  }

  @Get(':employeeId')
  async findOne(@Param('employeeId') employeeId: string): Promise<Employee> {
    return this.employeeService.findOne(employeeId);
  }

  @Delete(':employeeId')
  async delete(@Param('employeeId') employeeId: string): Promise<Employee> {
    return this.employeeService.delete(employeeId);
  }
}
