import { Injectable } from '@nestjs/common';
import { userAuthenticationDto } from 'src/user/dto/userAuthenticationDto';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthorisationService {
  constructor(private usersService: UserService) {}

  async valideUser(user: userAuthenticationDto): Promise<boolean> {
    return this.usersService.findByLoginAndPassword(user) ? true : false;
  }
  //resitration
}
