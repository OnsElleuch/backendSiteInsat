import { Injectable } from '@nestjs/common';
import { CreateContactAdminDto } from './dto/create-contact-admin.dto';
import { UpdateContactAdminDto } from './dto/update-contact-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactAdmin } from './entities/contact-admin.entity';
@Injectable()
export class ContactAdminService {
  constructor(
    @InjectRepository(ContactAdmin)
    private readonly ContactAdminRepository: Repository<ContactAdmin>,
  ) {}

  async create(createContactAdminDto: CreateContactAdminDto) {
    return await this.ContactAdminRepository.save(createContactAdminDto);
  }

  async findAll() {
    return await this.ContactAdminRepository.find();
  }

  async findOne(id: number) {
    return await this.ContactAdminRepository.findOne(id);
  }

  async update(id: number, updateContactAdminDto: UpdateContactAdminDto) {
    return await this.ContactAdminRepository.update(
      { id: id },
      updateContactAdminDto,
    );
  }

  async remove(id: number) {
    return await this.ContactAdminRepository.delete(id);
  }
}
