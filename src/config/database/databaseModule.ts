import { Module } from '@nestjs/common';
import { databaseProviders } from './providersDatabase';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
