import { ITour } from "src/interfaces/Tour";

export class TourDto implements ITour {
    name: string;
    description: string;
    tourOperator: string;
    price: number;
    img: string;
    id: string;
    type: string;
    date: string;
    location: string;

    constructor(name, description, tourOperator, price) {
        this.name = name;
        this.description = description;
        this.tourOperator = tourOperator;
        this.price = price;
    }
}