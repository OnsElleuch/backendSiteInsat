import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly NoteRepository: Repository<Note>,
  ) {}
  async create(createNoteDto: CreateNoteDto) {
    return await this.NoteRepository.save(createNoteDto);
  }
  async findAll() {
    return await this.NoteRepository.find();
  }

  async findOne(id: number) {
    return await this.NoteRepository.findOne(id);
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    return await this.NoteRepository.update({ id: id }, updateNoteDto);
  }
  async remove(id: number) {
    return await this.NoteRepository.delete(id);
  }
}
