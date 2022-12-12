import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import {RestauantModule} from './restaurant/restaurant.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { MenuController } from './menu/menu.controller';
import { MenuService } from './menu/menu.service';
import { MenuModule } from './menu/menu.module';
import { ToppingModule } from './topping/topping.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://sana:sana@cluster0.4cyongj.mongodb.net/wiwi?retryWrites=true&w=majority"
    ),
    RestauantModule,
    MenuModule,
    ToppingModule
  ],
  
  controllers: [AppController, RestaurantController, MenuController],
  providers: [AppService, RestaurantService, MenuService],
})
export class AppModule {}
