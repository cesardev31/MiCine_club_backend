import { ApiProperty } from '@nestjs/swagger';

export class documentation {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
