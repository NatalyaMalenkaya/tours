import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ToursModule } from './controllers/tours/tours.module';
import { OrderModule } from './controllers/order/order.module';
import { FeedbackModule } from './controllers/feedback/feedback.module';


@Module({
  imports: [
    UsersModule,
    ToursModule,
    OrderModule,
    FeedbackModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

