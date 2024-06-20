import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
@Prop({ default: () => uuidv4() })
    employeeId: string; 

  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  cargo: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
