import { ITour } from "src/interfaces/Tour";

export class TourDto implements ITour {
    name: string;
    tonnazh: string;
    price: number;
    description: string;
    img: string;
    id: string;
    type: string;
    date: string;
    location: string;

   
    constructor( name,location,tonnazh,price,description,date,img,type) {
        this.name=name;
        this.location = location;
        this.tonnazh = tonnazh;
        this.description = description;
        this.price=price;
        this.date = date;
        this.img = img;
        this.type = type;
    }
    
}