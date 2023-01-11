import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import {MongooseModule} from "@nestjs/mongoose";
import { Tour, TourSchema } from 'src/shemas/tour';
import {PassportModule} from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constanst';
import { JwtStrategyService } from 'src/services/authentification/jwt-strategy/jwt-strategy.service';
import { ToursService } from 'src/services/tours/tours.service';

@Module({
  controllers: [ToursController],
  imports:  [MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
    PassportModule,

    JwtModule.register({
      secret: jwtConstants.secret,
    })],
  providers: [ ToursService, JwtStrategyService],

})

export class ToursModule {}