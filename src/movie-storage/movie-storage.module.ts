import { Module } from '@nestjs/common';
import { MovieStorageService } from './movie-storage.service';
import { MovieStorageController } from './movie-storage.controller';

@Module({
  controllers: [MovieStorageController],
  providers: [MovieStorageService],
})
export class MovieStorageModule {}
