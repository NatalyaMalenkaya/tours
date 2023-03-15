import { Test, TestingModule } from '@nestjs/testing';
import { TechnicsService } from './technics.service';

describe('TechnicsService', () => {
  let service: TechnicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicsService],
    }).compile();

    service = module.get<TechnicsService>(TechnicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
