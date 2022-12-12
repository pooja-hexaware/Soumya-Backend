import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Topping, ToppingModel } from "./topping.model";


@Injectable()
export class ToppingRepo {
  constructor(
    @InjectModel(Topping.name)
    private readonly toppingModel: Model<ToppingModel>,
  ) {}

  async create(data): Promise<Topping> {
    const res = await new this.toppingModel(data).save();
    return res;
}

async findAll(): Promise<Topping[]> {
    return this.toppingModel.find({}).exec();
}

async findById(id: string): Promise<Topping> {
  return this.toppingModel.findById(id).exec();
}

async update(toppingId, data): Promise<Topping> {
    const filter = { _id: toppingId };
    return this.toppingModel.findOneAndUpdate(filter, data);
}

async delete(toppingId): Promise<Topping> {
  return this.toppingModel.findByIdAndDelete(toppingId);
}
}