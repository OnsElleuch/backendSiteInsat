import { Test, TestingModule } from '@nestjs/testing';
import { ContactAdminService } from './contact-admin.service';

describe('ContactAdminService', () => {
  let service: ContactAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactAdminService],
    }).compile();

    service = module.get<ContactAdminService>(ContactAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
