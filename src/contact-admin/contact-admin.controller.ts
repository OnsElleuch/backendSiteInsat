import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContactAdminService } from './contact-admin.service';
import { CreateContactAdminDto } from './dto/create-contact-admin.dto';
import { UpdateContactAdminDto } from './dto/update-contact-admin.dto';
@ApiTags('contact-admin')
@Controller('contact-admin')
export class ContactAdminController {
  constructor(private readonly contactAdminService: ContactAdminService) {}

  @Post()
  create(@Body() createContactAdminDto: CreateContactAdminDto) {
    return this.contactAdminService.create(createContactAdminDto);
  }

  @Get()
  findAll() {
    return this.contactAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactAdminService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactAdminDto: UpdateContactAdminDto,
  ) {
    return this.contactAdminService.update(+id, updateContactAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactAdminService.remove(+id);
  }
}
