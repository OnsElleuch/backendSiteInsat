import { Controller, Get } from '@nestjs/common';
import { DirectionService } from './direction.service';
import { DirectionEntity } from './entities/direction.entity';

@Controller('direction')
export class DirectionController {
    constructor( private directionService : DirectionService){

    }

    @Get('getDirectionMembers')
    getDirectionMembers() : Promise <DirectionEntity[]>{
        return this.directionService.getDirectionMembers();
    }

    @Get('getAdministrationMembers')
    getAdministrationMembers() : Promise <DirectionEntity[]> {
        return this.directionService.getAdministrationMembers();
    }
}
