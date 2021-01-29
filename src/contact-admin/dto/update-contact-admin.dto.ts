import { PartialType } from '@nestjs/mapped-types';
import { CreateContactAdminDto } from './create-contact-admin.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContactAdminDto extends PartialType(CreateContactAdminDto) {}
