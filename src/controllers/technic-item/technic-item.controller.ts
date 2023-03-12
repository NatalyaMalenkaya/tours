import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ITechnic, ITourClient} from "../../interfaces/technic";
import {ToursService} from "../../services/technics/technics.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";

@Controller('technic-item')
export class TourItemController {
     constructor(private technicsService: ToursService) {
     }
     static imgName: string;

    @Post()
    @UseInterceptors(FileInterceptor('img', {

        storage: diskStorage({
            destination: './public/',
            filename: (req, file, cb) => {

                const imgType = file.mimetype.split('/')
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

                const imgName = file.fieldname + '-' + uniqueSuffix+'.'+imgType[1];

                cb(null, imgName);

                TourItemController.imgName = imgName;
            }
        })
    })
    )
    initTours(@Body() body: ITourClient): void {
        body.img = TourItemController.imgName;

        this.technicsService.uploadTour(body);
    }


    @Get(":name")
    getTourById(@Param("name") name): Promise<ITechnic[]> {
        return this.technicsService.getToursByName(name);
    }



}
