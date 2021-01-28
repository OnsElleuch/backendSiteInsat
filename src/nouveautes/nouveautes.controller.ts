import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NouveautesService } from './nouveautes.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateNewsDto } from './dto/update-news.dto';
import { CreateNewsDto } from './dto/create-news.dto';

@ApiTags('nouveautes')
@Controller('nouveautes')
export class NouveautesController {
  constructor(private nouveautesService: NouveautesService) {}
  @Get('getNews')
  getNews() {
    return this.nouveautesService.getNews();
  }

  @Get('getNewsById/:id')
  getNewsById(@Param('id') id: number) {
    return this.nouveautesService.getNewsById(id);
  }

  @Put('updateNews/:id')
  updateNews(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.nouveautesService.updateNews(+id, updateNewsDto);
  }

  @Delete('removeDelete/:id')
  removeDelete(@Param('id') id: string) {
    return this.nouveautesService.removeNews(+id);
  }
  @Post('createNews/')
  createNews(@Body() createNewsDto: CreateNewsDto) {
    return this.nouveautesService.createNews(createNewsDto);
  }
}
