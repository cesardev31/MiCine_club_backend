import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    const response = {
      message: 'This action adds a new user',
    };
    return response;
  }

  findAll() {
    const response = {
      message: 'This action returns all user',
    };
    return response;
  }

  findOne(id: number) {
    const response = {
      message: `This action returns a #${id} user`,
    };
    return response;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
