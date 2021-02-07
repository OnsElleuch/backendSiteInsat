import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorantEntity } from './entities/doctorant.entity';

@Injectable()
export class DoctorantService {
  constructor(
    @InjectRepository(DoctorantEntity)
    private readonly doctorantRepository: Repository<DoctorantEntity>,
  ) {}
  async create(doctorant: DoctorantEntity) {
    return await this.doctorantRepository.save(doctorant);
  }

  async findAll() {
    return await this.doctorantRepository.find();
  }

  async findOne(id: string) {
    return await this.doctorantRepository.findOne(id);
  }

  async update(id: string, doctorant: DoctorantEntity) {
    return await this.doctorantRepository.update({ id: id }, doctorant);
  }

  async remove(id: number) {
    return await this.doctorantRepository.delete(id);
  }
}
