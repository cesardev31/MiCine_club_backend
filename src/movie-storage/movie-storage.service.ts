import { Injectable } from '@nestjs/common';
import { CreateMovieStorageDto } from './dto/create-movie-storage.dto';
import { UpdateMovieStorageDto } from './dto/update-movie-storage.dto';

@Injectable()
export class MovieStorageService {
  create(createMovieStorageDto: CreateMovieStorageDto) {
    return 'This action adds a new movieStorage';
  }

  findAll() {
    return `This action returns all movieStorage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movieStorage`;
  }

  update(id: number, updateMovieStorageDto: UpdateMovieStorageDto) {
    return `This action updates a #${id} movieStorage`;
  }

  remove(id: number) {
    return `This action removes a #${id} movieStorage`;
  }
}
