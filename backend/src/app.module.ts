import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ImportModule } from './import/import.module';
import { LiveModule } from './live/live.module';
import { ParksModule } from './parks/parks.module';
import { PlansModule } from './plans/plans.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    ParksModule,
    LiveModule,
    PlansModule,
    ProgressModule,
    ImportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
