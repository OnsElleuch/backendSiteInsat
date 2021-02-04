import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { CreateRendezVousDto } from './dto/create-rendez-vous.dto';
import { RendezVousService } from './rendez-vous.service';
@ApiTags('rendez-vous')
@Controller('rendez-vous')
export class RendezVousController {
  constructor(private rendezVousService: RendezVousService) {}
  @Get('getLatestRendezVous')
  getLatestRendezVous() {
    return this.rendezVousService.getLatestRendezVous();
  }

  @Post('createRendezVous')
  createRendezVous(@Body() createRendezVousDto: CreateRendezVousDto) {
    return this.rendezVousService.createRendezVous(createRendezVousDto);
  }
}
