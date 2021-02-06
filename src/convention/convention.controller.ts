import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConventionService } from './convention.service';
import { CreateConventionDto } from './dto/create-convention.dto';
import { UpdateConventionDto } from './dto/update-convention.dto';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Convention } from './entities/convention.entity';

@ApiTags('convention')
@Controller('convention')
export class ConventionController {
  constructor(private readonly conventionService: ConventionService) {}

  @Post()
  create(@Body() createConventionDto: CreateConventionDto) {
    return this.conventionService.create(createConventionDto);
  }

  @Get()
  findAll() {
    return this.conventionService.findAll();
  }

  @Get('paginate')
  getConventionPaginate(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<Convention>> {
    return this.conventionService.getConventionsPaginate({
      page,
      limit,
      route: 'http://localhost:3000/convention/paginate',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conventionService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateConventionDto: UpdateConventionDto,
  ) {
    return this.conventionService.update(+id, updateConventionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conventionService.remove(+id);
  }
}
