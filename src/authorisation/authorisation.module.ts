import { Module } from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { AuthorisationController } from './authorisation.controller';
import { AuthorisationService } from './authorisation.service';

@Module({
  controllers: [AuthorisationController],
  providers: [AuthorisationService],
  imports: [UserService],
})
export class AuthorisationModule {}
