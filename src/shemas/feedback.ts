import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IFeedback } from 'src/interfaces/feedback';
 
export type FeedbackDocument = HydratedDocument<Feedback>;
 
@Schema()
export class Feedback implements IFeedback {
 
    @Prop() name: string;
 
    @Prop() feedback: string;
  
 }   export const FeedbackSchema = SchemaFactory.createForClass(Feedback);