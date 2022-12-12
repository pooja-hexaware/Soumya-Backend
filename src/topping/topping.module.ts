import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToppingController } from './topping.controller';
import { Topping, ToppingSchema } from './topping.model';
import { ToppingRepo } from './topping.repo';
import { ToppingService } from './topping.service';



@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Topping.name,
        schema: ToppingSchema //schema defining how the model should look like, so it is being imported
      }
    ])
  ],
  controllers: [ToppingController],
  providers: [ToppingService, ToppingRepo],
  exports: [
    ToppingService,
    ToppingRepo
  ]
})
export class ToppingModule {}
