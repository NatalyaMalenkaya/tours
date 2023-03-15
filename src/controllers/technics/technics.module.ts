import { Module } from '@nestjs/common';
import { ToursController } from './technics.controller';
import {MongooseModule} from "@nestjs/mongoose";
import { Technic, TourSchema } from 'src/shemas/technic';
import {PassportModule} from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constanst';
import { JwtStrategyService } from 'src/services/authentification/jwt-strategy/jwt-strategy.service';
import { TechnicsService } from 'src/services/technics/technics.service';
import { TechnicItemController } from '../technic-item/technic-item.controller';

@Module({
  controllers: [ToursController, TechnicItemController],
  imports:  [MongooseModule.forFeature([{ name: Technic.name, schema: TourSchema }]),
    PassportModule,

    JwtModule.register({
      secret: jwtConstants.secret,
    })],
  providers: [ TechnicsService, JwtStrategyService],

})

export class ToursModule {}