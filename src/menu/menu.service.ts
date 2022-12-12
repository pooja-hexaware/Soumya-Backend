import { Injectable } from "@nestjs/common";
import { MenuRepo } from "./menu.repo";
import { Menu, MenuModel } from "./menu.model";
import { Model } from "mongoose";

@Injectable()
export class MenuService {

    
    constructor(
        private readonly menuRepo: MenuRepo,
        // private readonly restaurantModel: Model<RestaurantModel>
    ){}

    async create(menu: Menu): Promise<Menu> {
        return await this.menuRepo.create(menu);
    }

    async readAll(): Promise<Menu[]> {
        return await this.menuRepo.findAll();
    }

    async readById(id): Promise<Menu> {
        return await this.menuRepo.findById(id);
    }

    async update(id, menu: Menu): Promise<Menu> {
        return await this.menuRepo.update(id, menu)
    }

    // async update(patientId, data): Promise<Patient> {
    //     return this.patientRepo.update(patientId, data);
    // }

    async delete(id): Promise<any> {
        return await this.menuRepo.delete(id);
    }
}