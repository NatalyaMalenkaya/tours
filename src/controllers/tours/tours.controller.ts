import { Controller,Delete,Get, Param, Post, UseGuards } from '@nestjs/common';
import { ToursService } from 'src/services/tours/tours.service';
import { JwtAuthGuard } from 'src/services/authentification/jwt-auth.guard/jwt-auth.guard.service';
import { ITour } from 'src/interfaces/Tour';

@Controller('tours')
export class ToursController {

    constructor( private toursService: ToursService) {}

    // @UseGuards(JwtAuthGuard)
    @Post()
    initTours(): Promise<ITour[]> {
        this.toursService.generateTours();
        return  this.toursService.getAllTours();
    }


    @UseGuards(JwtAuthGuard)
    @Get()
   getAllTours(): Promise <ITour[]> {
       return this.toursService.getAllTours();
    }
    
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    getTourById(@Param ("id")id): Promise <ITour> {
        return this.toursService.getTourById(id);
    }


    @Delete()
    removeAllTours(): Promise<[]> {
       return  this.toursService.deleteTours();
    }
}
