import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovieStorageService } from './movie-storage.service';
import { CreateMovieStorageDto } from './dto/create-movie-storage.dto';
import { UpdateMovieStorageDto } from './dto/update-movie-storage.dto';

@Controller('movie-storage')
export class MovieStorageController {
  constructor(private readonly movieStorageService: MovieStorageService) {}

  @Post()
  create(@Body() createMovieStorageDto: CreateMovieStorageDto) {
    return this.movieStorageService.create(createMovieStorageDto);
  }

  @Get()
  findAll() {
    return this.movieStorageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieStorageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieStorageDto: UpdateMovieStorageDto) {
    return this.movieStorageService.update(+id, updateMovieStorageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieStorageService.remove(+id);
  }
}
