import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private readonly employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(employee: Employee): Promise<Employee> {
    const createdEmployee = new this.employeeModel(employee);
    return createdEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findOne(employeeId: string): Promise<Employee> {
    return this.employeeModel.findOne({ employeeId }).exec();
  }

  async update(employeeId: string, updatedEmployee: Employee): Promise<Employee> {
    return this.employeeModel.findOneAndUpdate({ employeeId }, updatedEmployee, { new: true }).exec();
  }
  
  async partialUpdate(employeeId: string, updatedFields: Partial<Employee>): Promise<Employee> {
    return this.employeeModel.findOneAndUpdate({ employeeId }, { $set: updatedFields }, { new: true }).exec();
  }


  async delete(employeeId: string): Promise<Employee> {
    return this.employeeModel.findOneAndDelete({ employeeId }).exec();
  }
}
