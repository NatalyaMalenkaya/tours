import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IOrder } from 'src/interfaces/order';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order implements IOrder{

  //  @Prop() name: string;
   // @Prop() price: number;
   // @Prop() type: string;
  //  @Prop() tonnazh: string;
    
  @Prop() techName:string ;
    @Prop() firstName:string ;
   // @Prop() lastName:string ;
   @Prop() cardNumber:string;
   @Prop() workingTime:string ;
   @Prop() workingDay:string;
   @Prop() workingLocation:string ;
    @Prop() technicId:string;
    @Prop() userId:string;
    

}

export const OrderSchema = SchemaFactory.createForClass(Order);
