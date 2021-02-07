import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  name: string;
  password: string;
  privilege: number;
  email: string;
  profile_picture: string;
  description?: string;
  president?: string;
}
