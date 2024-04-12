import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    try {
      const user = await this.userService.findOneAuth(email);
      if (!user) {
        throw new UnauthorizedException({
          message: 'Usuario No encontrado',
        });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      
      if (passwordMatch) {
        const payload = { sub: user._id, username: user.full_name };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
      throw new UnauthorizedException({
        message: 'contraseña incorrecta No encontrado',
      });
    } catch (error) {
      console.log(error);
      
      throw new Error(error);
    }
  }
}
