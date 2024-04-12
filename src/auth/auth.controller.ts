import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/signin.dto';

@ApiTags('auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async create(@Body() singInDto: SignInDto) {
    const { email, password } = singInDto; 
    try {
      const token = await this.authService.signIn(email, password);
      return token;
    } catch (error) {
      console.log(error);
      
      throw new HttpException(
        'credenciales invalidas',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
