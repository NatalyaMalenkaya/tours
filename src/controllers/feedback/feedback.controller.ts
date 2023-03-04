import { Controller , Post, Body, Get} from '@nestjs/common';
import { FeedbackDto } from 'src/dto/feedback-dto';
import { IFeedback } from 'src/interfaces/feedback';
import { FeedbackService } from 'src/services/feedback/feedback.service';

@Controller('feedback')
export class FeedbackController {


    constructor( private feedbackService: FeedbackService) {}
    @Get()
    getAllFeedback(): Promise<IFeedback[]>  {
               return this.feedbackService.getAllFeedback()
    }

    @Post()
    initFeedback(@Body() data: FeedbackDto): void {
    const feedbackData = new FeedbackDto(data.name, data.feedback);
   console.log(feedbackData);
       this.feedbackService.sendFeedback(feedbackData);
    }

   }
  
