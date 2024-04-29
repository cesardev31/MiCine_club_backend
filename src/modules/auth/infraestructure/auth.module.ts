import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './tools/constants';
import { AuthServices } from './services';
import { AuthController } from './controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './mongodb/auth';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7h' },
    }),
  ],
  providers: [
    AuthServices,
    {
      provide: 'tools:auths',
      useFactory: () => {
        // Define la lógica o crea una instancia para "tools:auths" aquí
      },
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
