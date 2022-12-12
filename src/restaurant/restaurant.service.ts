import { Injectable } from "@nestjs/common";
import { ResRepo } from "./restaurant.repo";
import { Restaurant, RestaurantModel } from "./restaurant.model";
import { Model } from "mongoose";

@Injectable()
export class RestaurantService {

    
    constructor(
        private readonly resRepo: ResRepo,
        // private readonly restaurantModel: Model<RestaurantModel>
    ){}

    async create(restaurant: Restaurant): Promise<Restaurant> {
        return await this.resRepo.create(restaurant);
    }

    async readAll(): Promise<Restaurant[]> {
        return await this.resRepo.findAll();
    }

    async readById(id): Promise<Restaurant> {
        return await this.resRepo.findById(id);
    }

    async update(id, restaurant: Restaurant): Promise<Restaurant> {
        return await this.resRepo.update(id, restaurant)
    }

    // async update(patientId, data): Promise<Patient> {
    //     return this.patientRepo.update(patientId, data);
    // }

    async delete(id): Promise<any> {
        return await this.resRepo.delete(id);
    }
}