import { Injectable } from "@nestjs/common";
import { ToppingRepo } from "./topping.repo";
import { Topping, ToppingModel } from "./topping.model";
import { Model } from "mongoose";

@Injectable()
export class ToppingService {

    
    constructor(
        private readonly toppingRepo: ToppingRepo,
        // private readonly restaurantModel: Model<RestaurantModel>
    ){}

    async create(topping: Topping): Promise<Topping> {
        return await this.toppingRepo.create(topping);
    }

    async readAll(): Promise<Topping[]> {
        return await this.toppingRepo.findAll();
    }

    async readById(id): Promise<Topping> {
        return await this.toppingRepo.findById(id);
    }

    async update(id, topping: Topping): Promise<Topping> {
        return await this.toppingRepo.update(id, topping)
    }

    // async update(patientId, data): Promise<Patient> {
    //     return this.patientRepo.update(patientId, data);
    // }

    async delete(id): Promise<any> {
        return await this.toppingRepo.delete(id);
    }
}