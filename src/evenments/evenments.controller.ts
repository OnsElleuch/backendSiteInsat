import { Controller, Get, Param } from '@nestjs/common';
import { EvenmentsService } from './evenments.service';

@Controller('nouveautes')
export class EvenmentsController {constructor(private evenmentsService : EvenmentsService){

}
@Get('getEvents')
getNews( ){
    return this.evenmentsService.getEvents();
}

@Get('getNewsById/:id')
getNewsById(@Param('id') id : number){
    return this.evenmentsService.getEventById(id);
}}
