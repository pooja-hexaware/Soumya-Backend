import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Decimal128, Document } from 'mongoose';
export type ToppingModel = Topping & Document 
@Schema()
export class Topping {
    
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    img:string;

}

//SigninModel is Signin class and Document

export const ToppingSchema = SchemaFactory.createForClass(Topping) //exporting schema by creating schema using schemafactory and createforclass(class=Signin)