import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthServices } from '../services';
import { ApiError } from 'src/common/dto/errors/api_error';
import { AuthMappers } from '../../app/mappers';
import { TAuthAPI } from '../../domain/dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { documentation } from '../tools/documentation';

@ApiTags('auth')
@Controller('api/v1/auth')
export class AuthController {
  mappers: AuthMappers;

  constructor(protected readonly services: AuthServices) {
    this.mappers = new AuthMappers();
  }

  @ApiBody({ type: documentation })
  @Post()
  async login(@Body() auth: TAuthAPI) {
    try {
      await this.services.auth(this.mappers.fromApiToDom(auth));
    } catch (e) {
      const error = new ApiError(e);
      throw new HttpException(error, error.code);
    }
  }
}
