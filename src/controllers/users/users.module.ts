import { Module } from '@nestjs/common';

import { UsersService } from 'src/services/users/users.service';
import { UsersController } from './users.controller';
import {MongooseModule} from "@nestjs/mongoose";
import { User, UserSchema } from 'src/shemas/user';
import { AuthService } from 'src/services/authentification/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/static/private/constanst';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategyService } from 'src/services/authentification/jwt-strategy/jwt-strategy.service';

@Module({
    
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]), 
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '60s'},
    }),
  ],

    controllers: [ UsersController],
    providers: [ UsersService, AuthService, JwtStrategyService],
  })
export class UsersModule {}
