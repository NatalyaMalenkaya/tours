import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Technic, TourDocument } from 'src/shemas/technic';
import { Model } from 'mongoose';
import { TourDto } from 'src/dto/technic-dto';
import { ITechnic, ITourClient } from 'src/interfaces/Technic';

@Injectable()
export class ToursService {
    // private  technicsCount = 10;
    constructor( @InjectModel(Technic.name) private  technicModel: Model<TourDocument>) {

    }
    async deleteTours(): Promise<any>{
        return  this.technicModel.deleteMany({})
    }
    async getAllTours(): Promise<ITechnic[]>{
         return  this.technicModel.find()
    }
    async getTourById(id): Promise<ITechnic>{
        return  this.technicModel.findById(id);
    }

    async uploadTour(body: ITourClient){
        const technic = new TourDto(body.name,body.location,body.tonnazh,body.price,body.description,body.date,body.img,body.type);
        const technicData = new this.technicModel(technic);
        await technicData.save();
    }

    async getToursByName(name): Promise<ITechnic[]> {
        return this.technicModel.find({name: { "$regex": name, "$options": "i" }})

    }

}

