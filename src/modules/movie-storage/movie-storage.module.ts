import { Module } from '@nestjs/common';
import { MovieStorageService } from './movie-storage.service';
import { MovieStorageController } from './movie-storage.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schema/movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  controllers: [MovieStorageController],
  providers: [MovieStorageService],
})
export class MovieStorageModule {}
