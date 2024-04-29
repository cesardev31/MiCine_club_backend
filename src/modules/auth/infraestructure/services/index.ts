import { Inject, Injectable } from '@nestjs/common';
import { AUTH_PROVIDERS, TToolsAuths } from '../../app/services';
import { TAuthDOM } from '../../domain/entities';
//import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServices {
  constructor(
    @Inject(AUTH_PROVIDERS.TOOLS_AUTHS) private readonly AuthModel: TToolsAuths,
    private jwtService: JwtService,
  ) {}
  async generateJWTToken(payload: any): Promise<string> {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async auth(auth: TAuthDOM): Promise<{ token: string }> {
    //const hashedPassword = await bcrypt.hash(auth.password, 10);
    /* const authData: TAuthDOM = {
      email: auth.email,
      password: hashedPassword,
    }; */

    const tokenPayload = { email: auth.email };
    const token = await this.generateJWTToken(tokenPayload);
    return { token };
  }
}
