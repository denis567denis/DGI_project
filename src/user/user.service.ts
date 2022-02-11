import { Inject, Injectable } from '@nestjs/common';
import { Users } from './user.entity';
import { userCreateDto } from './dto/userCreateDto';
import { userAuthenticationDto } from './dto/userAuthenticationDto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof Users,
  ) {}
  async findAll(): Promise<userCreateDto[]> {
    return this.usersRepository.findAll<Users>();
  }
  async create(user: userCreateDto): Promise<userCreateDto> {
    return await this.usersRepository.create({
      name: user.name,
      login: user.login,
      password: user.password,
      role: user.role,
    });
  }
  async update(id: string, user: userCreateDto): Promise<string> {
    await this.usersRepository.update(
      {
        name: user.name,
        login: user.login,
        password: user.password,
        role: user.role,
      },
      { where: { id: id } },
    );
    return 'succesful';
  }
  async findOne(id: string): Promise<userCreateDto> {
    return this.usersRepository.findOne({ where: { id: id } });
  }
  async findByLoginAndPassword(
    user: userAuthenticationDto,
  ): Promise<userCreateDto | any> {
    return this.usersRepository.findOne({
      where: { login: user.login, password: user.password },
    });
  }
}
