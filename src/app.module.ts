import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './config/database/databaseModule';
import { AuthorisationModule } from './authorisation/authorisation.module';
import { DocumentationModule } from './documentation/documentation.module';
import { StatisticModule } from './statistic/statistic.module';
import { TestModule } from './test/test.module';
import { ThemeModule } from './theme/theme.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    AuthorisationModule,
    DocumentationModule,
    StatisticModule,
    TestModule,
    ThemeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
