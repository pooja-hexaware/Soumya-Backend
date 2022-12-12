import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantController } from './restaurant.controller';
import { Restaurant, RestaurantSchema } from './restaurant.model';
import { ResRepo } from './restaurant.repo';
import { RestaurantService } from './restaurant.service';



@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Restaurant.name,
        schema: RestaurantSchema //schema defining how the model should look like, so it is being imported
      }
    ])
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService, ResRepo],
  exports: [
    RestaurantService,
    ResRepo
  ]
})
export class RestauantModule {}
