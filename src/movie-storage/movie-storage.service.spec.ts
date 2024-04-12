import { Test, TestingModule } from '@nestjs/testing';
import { MovieStorageService } from './movie-storage.service';

describe('MovieStorageService', () => {
  let service: MovieStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieStorageService],
    }).compile();

    service = module.get<MovieStorageService>(MovieStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
