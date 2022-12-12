import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Topping } from "../topping/topping.model";
import { ToppingService } from "../topping/topping.service";
// import { ToppingDto } from "./topping-dto.dto";

@Controller('topping')
export class ToppingController {
    constructor(private readonly toppingService: ToppingService){}

    // @Post()
    // async createTopping(@Res() response, @Body() toppingdto: ToppingDto) {
    //     const newTopping = await this.toppingService.create(toppingdto);
    //     return response.status(HttpStatus.CREATED).json({
    //         newTopping
    //     })
    // }

    @Get()
    async fetchAll(@Res() response) {
        const toppings = await this.toppingService.readAll();
        return response.status(HttpStatus.OK).json({
            toppings
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const toppings = await this.toppingService.readById(id);
        return response.status(HttpStatus.OK).json({
          toppings
        })
    }

    // @Put('/:id')
    // async update(@Res() response, @Param('id') id, @Body() toppingdto: ToppingDto) {
    //     const updatedTopping = await this.toppingService.update(id, toppingdto);
    //     return response.status(HttpStatus.OK).json({
    //         updatedTopping
    //     })
    // }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedTopping = await this.toppingService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedTopping
        })
    }
}