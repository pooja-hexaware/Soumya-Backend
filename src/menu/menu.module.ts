import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuController } from './menu.controller';
import { Menu, MenuSchema } from './menu.model';
import { MenuRepo } from './menu.repo';
import { MenuService } from './menu.service';



@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Menu.name,
        schema: MenuSchema //schema defining how the model should look like, so it is being imported
      }
    ])
  ],
  controllers: [MenuController],
  providers: [MenuService, MenuRepo],
  exports: [
    MenuService,
    MenuRepo
  ]
})
export class MenuModule {}
