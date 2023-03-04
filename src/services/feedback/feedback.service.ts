import { Injectable } from '@nestjs/common';

//import { Feedback } from 'src/shemas/feedback';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeedbackDto } from 'src/dto/feedback-dto';
import { IFeedback } from 'src/interfaces/feedback';
import { Feedback, FeedbackDocument } from 'src/shemas/feedback';

@Injectable()
export class FeedbackService {

    constructor(@InjectModel(Feedback.name) private feedbackModel: Model<FeedbackDocument>) {}

    async getAllFeedback(): Promise<IFeedback[]>{
        return  this.feedbackModel.find()
   }

   async  sendFeedback( data:FeedbackDto){
    const feedbackData = new this.feedbackModel(data);
    console.log('feedbackData', feedbackData);
   await feedbackData.save();
}

}