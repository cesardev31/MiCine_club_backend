import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
  Body,
} from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { MovieStorageService } from './movie-storage.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { CreateMovieStorageDto } from './dto/create-movie-storage.dto';

@Controller('api/v1/movie')
export class MovieStorageController {
  constructor(private readonly movieStorageService: MovieStorageService) {}

  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'portada', maxCount: 1 },
      { name: 'movie', maxCount: 1 },
      { name: 'trailer', maxCount: 1 },
    ]),
  )
  async uploadFile(
    @UploadedFiles()
    files: {
      portada?: Express.Multer.File[];
      movie?: Express.Multer.File[];
      trailer?: Express.Multer.File[];
    },
    @Body() createMovieStorageDto: CreateMovieStorageDto,
  ): Promise<any> {
    if (!files.portada || !files.movie || !files.trailer) {
      throw new BadRequestException('Todos los archivos son requeridos');
    } else {
      try {
        const movieData = {
          ...createMovieStorageDto,
          url_portada: this.getFileUrl(files.portada[0], 'img'),
          url_movie: this.getFileUrl(files.movie[0], 'movie'),
          url_trailer: this.getFileUrl(files.trailer[0], 'trailer'),
        };
        await this.movieStorageService.create(movieData);

        return { message: 'Archivos subidos y datos guardados exitosamente' };
      } catch (error) {
        console.log(error);
        throw new Error('Error al subir los archivos y guardar los datos');
      }
    }
  }

  private getFileUrl(file: Express.Multer.File, folder: string): string {
    const fileId = uuidv4();
    const fileExtension = path.extname(file.originalname);
    const fileName = `${fileId}${fileExtension}`;
    const filePath = path.join(`./public/${folder}/${fileName}`);
    const fileUrl = `${process.env.URL_SERVIDOR}/${folder}/${fileName}`;

    fs.writeFileSync(filePath, file.buffer);

    return fileUrl;
  }
}
