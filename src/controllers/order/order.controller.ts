import {Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interfaces/order';
import { OrderService } from 'src/services/order/order.service';

@Controller('order')
export class OrderController {
    
    constructor( private orderService: OrderService ) {
    }

    @Post()
    initTechnics(@Body() data: OrderDto): void {
        const orderData = new OrderDto(data.techName,data.firstName, data.cardNumber, data.workingTime, data.workingDay, data.workingLocation, data.tourId, data.userId);
        this.orderService.sendOrder(orderData);
    }


    
    @Get(":userId")
    getOrderById(@Param ("userId")userId): Promise <IOrder[]> {
        return this.orderService.getOrderById(userId);
    }
}

