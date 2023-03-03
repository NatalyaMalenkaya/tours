import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Feedback, FeedbackSchema } from 'src/shemas/feedback';
import { FeedbackService } from 'src/services/feedback/feedback.service';
import { FeedbackController } from './feedback.controller';


@Module({
    controllers: [FeedbackController],
    providers: [ FeedbackService],
    imports:  [MongooseModule.forFeature([{ name: Feedback.name, schema: FeedbackSchema }])],
})
export class FeedbackModule {}
