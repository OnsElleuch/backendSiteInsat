import { Module } from '@nestjs/common';
import { ContactAdminService } from './contact-admin.service';
import { ContactAdminController } from './contact-admin.controller';
import { ContactAdmin } from './entities/contact-admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [ContactAdminController],
  providers: [ContactAdminService],
  imports: [TypeOrmModule.forFeature([ContactAdmin])],
})
export class ContactAdminModule {}
