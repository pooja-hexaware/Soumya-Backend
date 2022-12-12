import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from 'mongoose';
import { type } from "os";
import { Menu } from "src/menu/menu.model";

export type RestaurantModel = Restaurant & Document 
@Schema()
export class Restaurant {
    
    @Prop({required: true})
    store_id: string;

    @Prop({required: true})
    store_name: string;

    @Prop({required: true})
    store_address: string;

    @Prop({required: true})
    store_zip: string;

    @Prop({required: true})
    store_city: string;

    @Prop({required: true})
    store_state: string;

    @Prop({required: true})
    store_phone: string;

    @Prop({required: true})
    kitchen_name: string;

    @Prop({required: true})
    store_img: string;

    @Prop({type: [{type:Types.ObjectId, ref:Menu.name}]})
    menu: mongoose.Types.ObjectId[];

}

//SigninModel is Signin class and Document

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant) //exporting schema by creating schema using schemafactory and createforclass(class=Signin)