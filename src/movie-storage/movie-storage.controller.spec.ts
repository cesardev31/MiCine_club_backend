import { Test, TestingModule } from '@nestjs/testing';
import { MovieStorageController } from './movie-storage.controller';
import { MovieStorageService } from './movie-storage.service';

describe('MovieStorageController', () => {
  let controller: MovieStorageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieStorageController],
      providers: [MovieStorageService],
    }).compile();

    controller = module.get<MovieStorageController>(MovieStorageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
