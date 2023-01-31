import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BreedDocument = HydratedDocument<Breed>;

@Schema()
export class Breed {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const BreedSchema = SchemaFactory.createForClass(Breed);
