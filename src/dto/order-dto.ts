import { IOrder } from "src/interfaces/order";


export class OrderDto implements IOrder{
    techName: string | null ;
    firstName: string | null ;
    cardNumber: string;
    workingTime: string | null;
    workingDay: string | null;
    workingLocation:string | null;
    technicId: string | null;
    userId: string | null;
    
    //lastName: string | null;
    
    
  //  name: string | null ;
   // price: number | null ;
  //  type:string | null ;
  //  tonnazh:string | null 


    constructor( techName, firstName, cardNumber, workingTime , workingDay, workingLocation, technicId, userId) {
        this.techName = techName;  
        this.firstName = firstName;
        //this.lastName = lastName,
        this.cardNumber = cardNumber,
        this.workingTime = workingTime,
        
        this.workingDay = workingDay,
        
        this.workingLocation = workingLocation,
        this.technicId = technicId,
        this.userId = userId
      //  this.name = name, 
      //  this.price = price,
      //  this.type = type,
      //  this.tonnazh = this.tonnazh

    }}