import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tour, TourDocument } from 'src/shemas/tour';
import { Model } from 'mongoose';
import { TourDto } from 'src/dto/tour-dto';
import { ITour } from 'src/interfaces/Tour';

@Injectable()
export class ToursService {
    private  toursCount = 10;
    constructor( @InjectModel(Tour.name) private  tourModel: Model<TourDocument>) {

    }
    async generateTour(test: ITour){
        const tour = new TourDto(test.name,test.location,test.description,test.tourOperator);
        const tourData = new this.tourModel(tour);
        await tourData.save();
    }

    async getToursByName(name): Promise<ITour[]> {
        return this.tourModel.find({name: { "$regex": name, "$options": "i" }})

    }






    async deleteTechnics(): Promise<any>{
        return  this.tourModel.deleteMany({})
    }
    async getAllTours(): Promise<ITour[]>{
        return  this.tourModel.find()
    }
    async getTourById(id): Promise<ITour>{
        return  this.tourModel.findById(id);
    }




}

