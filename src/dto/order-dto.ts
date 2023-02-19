import { IOrder } from "src/interfaces/order";


export class OrderDto implements IOrder{
    age: string;
    workingDay: string;
    cardNumber: string;
    tourId: string;
    userId: string;
    

    constructor( age,workingDay,cardNumber,tourId, userId) {
        this.age = age ;
        this.workingDay = workingDay ;
        this.cardNumber = cardNumber;
        this.tourId = tourId;
        this.userId = userId;
    }
}
