import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { ClientModule } from 'src/client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { TrainingSessionModule } from 'src/training-session/training-session.module';

@Module({
  controllers: [BookingController],
  imports: [
    TypeOrmModule.forFeature([Booking]),
    ClientModule,
    TrainingSessionModule,
  ],
  providers: [BookingService],
})
export class BookingModule {}
