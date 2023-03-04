import { IFeedback } from "src/interfaces/feedback";
 
export class FeedbackDto implements IFeedback {
    
    constructor(public name: string, public feedback: string){}
    
 }