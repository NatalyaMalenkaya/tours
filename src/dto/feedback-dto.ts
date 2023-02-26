import { IFeedback } from "src/interfaces/feedback";
 
export class FeedbackDto implements IFeedback {
    name: string
    feedback: string
 }