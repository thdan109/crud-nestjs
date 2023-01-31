import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed, BreedDocument } from './Schemas/breed.schema';

@Injectable()
export class BreedsService {
  constructor(
    @InjectModel(Breed.name) private breedModel: Model<BreedDocument>,
  ) {}
  async create(createBreedDto: CreateBreedDto): Promise<Breed> {
    return new this.breedModel(createBreedDto).save();
  }

  async findAll() {
    return this.breedModel.find();
  }

  async findOne(name: string) {
    return this.breedModel.findOne({ name });
  }

  async update(name: string, updateBreedDto: UpdateBreedDto) {
    return this.breedModel.updateOne(
      { name: name },
      { $set: { ...updateBreedDto } },
    );
  }

  async remove(name: number) {
    return this.breedModel.deleteOne({ name });
  }
}
