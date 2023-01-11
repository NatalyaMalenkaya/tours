import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interfaces/order';
import { Order, OrderDocument } from 'src/shemas/order';

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}


    async  sendOrder( data:OrderDto): Promise<Order>{
        const orderData = new this.orderModel(data);
        return orderData.save();
    }


   async getOrderById(userId): Promise<IOrder[]>{
       // const orders = this.orderModel.find(userId);
       // console.log(orders);
       return this.orderModel.find(userId);
   }



}

