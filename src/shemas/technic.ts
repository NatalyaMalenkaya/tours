import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {ITechnic} from "../interfaces/Technic";
 
export type TourDocument = HydratedDocument<Technic>;
 
@Schema()
export class Technic implements ITechnic {
    @Prop() name:string ;
    @Prop() location:string ;
    @Prop() tonnazh:string;
    @Prop() price: number;
    @Prop() description: string;
    @Prop() date: string
    @Prop() img:string;
    @Prop() type: string;
    @Prop() id:string;


}
 
export const TourSchema = SchemaFactory.createForClass(Technic);