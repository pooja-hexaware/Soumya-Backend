import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Restaurant } from "../restaurant/restaurant.model";
import { RestaurantService } from "../restaurant/restaurant.service";
// import { RestaurantDto } from "./restaurant-dto.dto";

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService){}

    // @Post()
    // async createRestaurant(@Res() response, @Body() restaurantdto: RestaurantDto) {
    //     const newRestaurant = await this.restaurantService.create(restaurantdto);
    //     return response.status(HttpStatus.CREATED).json({
    //         newRestaurant
    //     })
    // }

    @Get()
    async fetchAll(@Res() response) {
        const restaurants = await this.restaurantService.readAll();
        return response.status(HttpStatus.OK).json({
          restaurants
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const restaurant = await this.restaurantService.readById(id);
        return response.status(HttpStatus.OK).json({
          restaurant
        })
    }

    // @Put('/:id')
    // async update(@Res() response, @Param('id') id, @Body() restaurantdto: RestaurantDto) {
    //     const updatedRestaurant = await this.restaurantService.update(id, restaurantdto);
    //     return response.status(HttpStatus.OK).json({
    //         updatedRestaurant
    //     })
    // }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedRestaurant = await this.restaurantService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedRestaurant
        })
    }
}