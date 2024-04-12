import { Injectable } from '@nestjs/common';
import { CreateMovieStorageDto } from './dto/create-movie-storage.dto';
import { Model, Types } from 'mongoose';
import { Movie, MovieDocument } from './schema/movie.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MovieStorageService {
  constructor(@InjectModel(Movie.name)private readonly MovieModel: Model<MovieDocument>) {}

  async create(createMovieStorageDto: CreateMovieStorageDto): Promise<Movie> {
    const createdMovie = new this.MovieModel({
      _id: new Types.ObjectId(),
      ...createMovieStorageDto,
    });
    return createdMovie.save();
  }

 
}
