import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ITechnic, ITechnicClient} from "../../interfaces/technic";
import {TechnicsService} from "../../services/technics/technics.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";

@Controller('technic-item')
export class TechnicItemController {
     constructor(private technicsService: TechnicsService) {
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

                TechnicItemController.imgName = imgName;
            }
        })
    })
    )
    initTechnics(@Body() body: ITechnicClient): void {
        body.img = TechnicItemController.imgName;

        this.technicsService.uploadTechnic(body);
    }


    @Get(":name")
    getTechnicById(@Param("name") name): Promise<ITechnic[]> {
        return this.technicsService.getTechnicsByName(name);
    }



}
