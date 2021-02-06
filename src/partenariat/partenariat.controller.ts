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
import { PartenariatService } from './partenariat.service';
import { CreatePartenariatDto } from './dto/create-partenariat.dto';
import { UpdatePartenariatDto } from './dto/update-partenariat.dto';
import { ApiTags } from '@nestjs/swagger';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Partenariat } from './entities/partenariat.entity';

@ApiTags('partenariat')
@Controller('partenariat')
export class PartenariatController {
  constructor(private readonly partenariatService: PartenariatService) {}

  @Post()
  create(@Body() createPartenariatDto: CreatePartenariatDto) {
    return this.partenariatService.create(createPartenariatDto);
  }

  @Get()
  findAll() {
    return this.partenariatService.findAll();
  }

  @Get('paginate')
  getPartenariatsPaginate(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<Partenariat>> {
    return this.partenariatService.getPartenariatPaginate({
      page,
      limit,
      route: 'http://localhost:3000/partenariat/paginate',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partenariatService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePartenariatDto: UpdatePartenariatDto,
  ) {
    return this.partenariatService.update(+id, updatePartenariatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partenariatService.remove(+id);
  }
}
