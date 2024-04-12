import { PartialType } from '@nestjs/swagger';
import { CreateMovieStorageDto } from './create-movie-storage.dto';

export class UpdateMovieStorageDto extends PartialType(CreateMovieStorageDto) {}
