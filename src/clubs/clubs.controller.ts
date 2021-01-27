import { Controller, Get, Param } from '@nestjs/common';
import { ClubsService } from './clubs.service';

@Controller('nouveautes')
export class ClubsController {constructor(private clubsService : ClubsService){

}
@Get('getClubs')
getNews( ){
    return this.clubsService.getClubs();
}

@Get('getClubById/:id')
getNewsById(@Param('id') id : number){
    return this.clubsService.getClubById(id);
}}
