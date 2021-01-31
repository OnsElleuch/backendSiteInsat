import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EvenmentsService } from './evenments.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@ApiTags('evenments')
@Controller('evenments')
export class EvenmentsController {
  constructor(private evenmentsService: EvenmentsService) {}

  @Get('getEvents')
  getEvents() {
    return this.evenmentsService.getEvents();
  }

  @Get('getEventsById/:id')
  getEventsById(@Param('id') id: number) {
    return this.evenmentsService.getEventById(id);
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
  updateEvent(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.evenmentsService.updateEvent(+id, updateEventDto);
  }

  @Delete('removeEvent/:id')
  removeEvent(@Param('id') id: string) {
    return this.evenmentsService.removeEvent(+id);
  }
}
