import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CreateRendezVousDto } from './dto/create-rendez-vous.dto';
import { RendezVousEntity } from './entities/rendez-vous.entity';
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

  @Get('getAllRendezVous')
  getAllRendezVous(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<RendezVousEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.rendezVousService.getAllRendezVous({
      page,
      limit,
      route: 'http://localhost:3000/rendez-vous/getAllRendezVous',
    });
  }

  @Get('getRendezVousById/:id')
  getRendezVousById(@Param('id') id: number) {
    return this.rendezVousService.getRendezVousById(id);
  }

  @Delete('deleteRendezVousById/:id')
  deleteRendezVousById(@Param('id') id: number) {
    return this.rendezVousService.deleteRendezVousById(id);
  }
}
