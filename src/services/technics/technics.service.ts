import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Technic, TourDocument } from 'src/shemas/technic';
import { Model } from 'mongoose';
import { TechnicDto } from 'src/dto/technic-dto';
import { ITechnic, ITechnicClient } from 'src/interfaces/Technic';

@Injectable()
export class TechnicsService {
    // private  technicsCount = 10;
    constructor( @InjectModel(Technic.name) private  technicModel: Model<TourDocument>) {

    }
    async deleteTours(): Promise<any>{
        return  this.technicModel.deleteMany({})
    }
    async getAllTours(): Promise<ITechnic[]>{
         return  this.technicModel.find()
    }
    async getTechnicById(id): Promise<ITechnic>{
        return  this.technicModel.findById(id);
    }

    async uploadTechnic(body: ITechnicClient){
        const technic = new TechnicDto(body.name,body.location,body.tonnazh,body.price,body.description,body.date,body.img,body.type);
        const technicData = new this.technicModel(technic);
        await technicData.save();
    }

    async getTechnicsByName(name): Promise<ITechnic[]> {
        return this.technicModel.find({name: { "$regex": name, "$options": "i" }})

    }

}

