import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommissionTheseService } from './commission-these.service';
import { EnseignantCommissionTheseEntity } from './entities/enseignant-commission-these.entity';

@Controller('enseignant-commission-these')
export class CommissionTheseController {
  constructor(
    private readonly commissionTheseService: CommissionTheseService,
  ) {}

  @Post()
  create(
    @Body() enseignantCommissionTheseEntity: EnseignantCommissionTheseEntity,
  ) {
    return this.commissionTheseService.create(enseignantCommissionTheseEntity);
  }

  @Get('getMembresDeCommites/:domaine')
  findByDomaine(@Param('domaine') domaine: string) {
    return this.commissionTheseService.findByDomaine(domaine);
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.commissionTheseService.findOne(email);
  }

  @Put(':email')
  update(
    @Param('email') email: string,
    @Body() enseignantCommissionTheseEntity: EnseignantCommissionTheseEntity,
  ) {
    return this.commissionTheseService.update(
      email,
      enseignantCommissionTheseEntity,
    );
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.commissionTheseService.remove(email);
  }
}
