import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { EvenmentsService } from './evenments.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { EventEntity } from './entities/event.entity';

@ApiTags('evenments')
@Controller('evenments')
export class EvenmentsController {
  constructor(private evenmentsService: EvenmentsService) {}

  @Get('getEvents')
  getEvents() {
    return this.evenmentsService.getEvents();
  }

  @Get('getEventsPaginate')
  getEventsPaginate(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<EventEntity>> {
    return this.evenmentsService.getEventsPaginate({
      page,
      limit,
      route: 'http://localhost:3000/evenments/getEventsPaginate',
    });
  }

  @Get('getEventsById/:id')
  getEventsById(@Param('id') id: number) {
    return this.evenmentsService.getEventsById(id);
  }

  @Get('getEventsByClub/:club')
  getEventsByClub(@Param('club') club: string) {
    return this.evenmentsService.getEventsByClub(club);
  }

  @Post('createEvent/')
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.evenmentsService.createEvent(createEventDto);
  }

  @Put('updateEvent/:id')
  updateEvent(@Param('id') id: number, @Body() updateEventDto: UpdateEventDto) {
    return this.evenmentsService.updateEvent(id, updateEventDto);
  }

  @Delete('removeEvent/:id')
  removeEvent(@Param('id') id: number) {
    return this.evenmentsService.removeEvent(id);
  }
}
