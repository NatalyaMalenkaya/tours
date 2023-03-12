import { Controller,Delete,Get, Param, Post, UseGuards } from '@nestjs/common';
import { ToursService } from 'src/services/technics/technics.service';
import { JwtAuthGuard } from 'src/services/authentification/jwt-auth.guard/jwt-auth.guard.service';
import { ITechnic } from 'src/interfaces/Technic';

@Controller('technics')
export class ToursController {

    constructor( private technicsService: ToursService) {}

    // @UseGuards(JwtAuthGuard)
    @Post()
    initTechnics(): Promise<ITechnic[]> {
       // this.technicsService.generateTours();
        return  this.technicsService.getAllTours();
    }


    @UseGuards(JwtAuthGuard)
    @Get()
   getAllTours(): Promise <ITechnic[]> {
       return this.technicsService.getAllTours();
    }
    
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    getTourById(@Param ("id")id): Promise <ITechnic> {
        return this.technicsService.getTourById(id);
    }


    @Delete()
    removeAllTours(): Promise<[]> {
       return  this.technicsService.deleteTours();
    }
}
