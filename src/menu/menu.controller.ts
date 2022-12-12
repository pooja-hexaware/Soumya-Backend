import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Menu } from "../menu/menu.model";
import { MenuService } from "../menu/menu.service";
// import { MenuDto } from "./menu-dto.dto";

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService){}

    // @Post()
    // async createMenu(@Res() response, @Body() menudto: MenuDto) {
    //     const newMenu = await this.menuService.create(menudto);
    //     return response.status(HttpStatus.CREATED).json({
    //         newMenu
    //     })
    // }

    @Get()
    async fetchAll(@Res() response) {
        const menus = await this.menuService.readAll();
        return response.status(HttpStatus.OK).json({
            menus
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const menus = await this.menuService.readById(id);
        return response.status(HttpStatus.OK).json({
          menus
        })
    }

    // @Put('/:id')
    // async update(@Res() response, @Param('id') id, @Body() menudto: MenuDto) {
    //     const updatedMenu = await this.menuService.update(id, menudto);
    //     return response.status(HttpStatus.OK).json({
    //         updatedMenu
    //     })
    // }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedMenu = await this.menuService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedMenu
        })
    }
}