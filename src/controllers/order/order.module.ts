import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { PassportModule } from '@nestjs/passport';
import { Order, OrderSchema } from 'src/shemas/order';
import { OrderService } from '../../services/order/order.service';
import { OrderController } from './order.controller';



@Module({
    controllers: [OrderController],
    providers: [ OrderService],
    imports:  [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
})
export class OrderModule {}
