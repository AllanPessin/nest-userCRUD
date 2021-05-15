import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserEntity } from './database/user.entity';
import { UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async index(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Post()
  @ApiBody({ type: UserDTO })
  async create(@Body() user: UserDTO): Promise<UserEntity> {
    return await this.userService.create(user);
  }
}
