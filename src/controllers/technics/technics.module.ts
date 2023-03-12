import { Module } from '@nestjs/common';
import { ToursController } from './technics.controller';
import {MongooseModule} from "@nestjs/mongoose";
import { Technic, TourSchema } from 'src/shemas/technic';
import {PassportModule} from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constanst';
import { JwtStrategyService } from 'src/services/authentification/jwt-strategy/jwt-strategy.service';
import { ToursService } from 'src/services/technics/technics.service';
import { TourItemController } from '../technic-item/technic-item.controller';

@Module({
  controllers: [ToursController, TourItemController],
  imports:  [MongooseModule.forFeature([{ name: Technic.name, schema: TourSchema }]),
    PassportModule,

    JwtModule.register({
      secret: jwtConstants.secret,
    })],
  providers: [ ToursService, JwtStrategyService],

})

export class ToursModule {}