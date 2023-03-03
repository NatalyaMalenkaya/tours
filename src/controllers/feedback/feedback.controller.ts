import { Controller , Post, Body} from '@nestjs/common';
import { FeedbackDto } from 'src/dto/feedback-dto';
import { IFeedback } from 'src/interfaces/feedback';
import { FeedbackService } from 'src/services/feedback/feedback.service';

@Controller('feedback')
export class FeedbackController {


    constructor( private feedbackService: FeedbackService) {}


    @Post()
    initFeedback(): Promise<IFeedback[]> {
        return this.feedbackService.getAllFeedback();
    }

    
}
