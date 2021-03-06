import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { NouveautesService } from './nouveautes.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateNewsDto } from './dto/update-news.dto';
import { CreateNewsDto } from './dto/create-news.dto';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { NewsEntity } from './entities/news.entity';
@ApiTags('nouveautes')
@Controller('nouveautes')
export class NouveautesController {
  constructor(private nouveautesService: NouveautesService) {}
  @Get('getNews')
  getNews() {
    return this.nouveautesService.getNews();
  }

  @Get('getNewsPaginate')
  getNewsPaginate(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<NewsEntity>> {
    return this.nouveautesService.getNewsPaginate({
      page,
      limit,
      route: 'http://localhost:3000/news/getNewsPaginate',
    });
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
