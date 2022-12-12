import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Restaurant, RestaurantModel } from "./restaurant.model";


@Injectable()
export class ResRepo {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel: Model<RestaurantModel>,
  ) {}

  async create(data): Promise<Restaurant> {
    const res = await new this.restaurantModel(data).save();
    return res;
}

async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find({}).exec();
}

async findById(id: string): Promise<Restaurant> {
  return this.restaurantModel.findById(id).populate('menu');
}

async update(restaurantId, data): Promise<Restaurant> {
    const filter = { _id: restaurantId };
    return this.restaurantModel.findOneAndUpdate(filter, data);
}

async delete(restaurantId): Promise<Restaurant> {
  return this.restaurantModel.findByIdAndDelete(restaurantId);
}
}