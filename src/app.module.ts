import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { TrainersModule } from './trainers/trainers.module';
import { ClientModule } from './client/client.module';
import { TrainingSessionModule } from './training-session/training-session.module';
import { BookingModule } from './booking/booking.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    AuthModule,
    TrainersModule,
    ClientModule,
    TrainingSessionModule,
    BookingModule,
    SubscriptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
