import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { usersProviders } from './user.providers';

@Module({
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
  exports: [UserService],
})
export class UserModule {}
