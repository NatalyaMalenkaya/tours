import {Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interfaces/order';
import { OrderService } from 'src/services/order/order.service';
import {Order} from "../../shemas/order";


@Controller('order')
export class OrderController {
    
    constructor( private orderService: OrderService ) {
    }

   @Post()
    async initTours(@Body() data: IOrder): Promise<Order>{
        const orderData = new OrderDto(data.techName,data.firstName, data.cardNumber, data.workingTime, data.workingDay, data.workingLocation, data.technicId, data.userId);
        return this.orderService.sendOrder(orderData)
    }

    @Get()
    getOrderAll(): Promise <IOrder[]> {
        return this.orderService.getOrderAll();
    }

    @Get(":userId")
    getOrderById(@Param ("userId") userId): Promise <IOrder[]> {
        return this.orderService.getOrderById(userId);
    }


/*
    
    @Get(":userId")
    getOrderById(@Param ("userId")userId): Promise <IOrder[]> {
        return this.orderService.getOrderById(userId);
    }*/
}

