import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interfaces/order';
import { Order, OrderDocument } from 'src/shemas/order';

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    async sendOrder(data: OrderDto): Promise<Order> {
        const orderData = new this.orderModel(data);
        return orderData.save();
    }
    async getUsersOrders(userId: string): Promise<Order[]> {
        if (userId==='all')
            return this.orderModel.find();
        return this.orderModel.find({userId: { "$regex": userId, "$options": "i" }})
    }

    async getOrder(orderId: string): Promise<IOrder> {
        return this.orderModel.findById(orderId);
    }

   async getOrderAll(): Promise<IOrder[]>{
    return this.orderModel.find();

    
}
async getOrderById(userId: string): Promise<IOrder[]>{
    return this.orderModel.find({"userId": userId});
}


}

/*
   async getOrderById(userId): Promise<IOrder[]>{
       // const orders = this.orderModel.find(userId);
       // console.log(orders);
       return this.orderModel.find(userId);
   }

   async getOrderAll(): Promise<IOrder[]>{
    return this.orderModel.find();
}


}

*/