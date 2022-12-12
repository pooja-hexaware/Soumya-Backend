import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Menu, MenuModel } from "./menu.model";


@Injectable()
export class MenuRepo {
  constructor(
    @InjectModel(Menu.name)
    private readonly menuModel: Model<MenuModel>,
  ) {}

  async create(data): Promise<Menu> {
    const res = await new this.menuModel(data).save();
    return res;
}

async findAll(): Promise<Menu[]> {
    return this.menuModel.find({}).exec();
}

async findById(id: string): Promise<Menu> {
  return this.menuModel.findById(id).populate('topping');
}

async update(menuId, data): Promise<Menu> {
    const filter = { _id: menuId };
    return this.menuModel.findOneAndUpdate(filter, data);
}

async delete(menuId): Promise<Menu> {
  return this.menuModel.findByIdAndDelete(menuId);
}
}