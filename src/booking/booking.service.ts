import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { ClientService } from 'src/client/client.service';
import { InscribeInSessionDto } from './dto/inscribe-in-session.dto';
import { TrainingSessionService } from 'src/training-session/training-session.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    private readonly clientService: ClientService,
    private readonly trainingSessionService: TrainingSessionService,
  ) {}

  create(createBookingDto: CreateBookingDto) {
    return 'This action adds a new booking';
  }

  async inscribeClientInClass(toInscribe: InscribeInSessionDto) {
    const { email, sessionId } = toInscribe;

    const client = await this.clientService.findActiveSubscription(email);

    if (!client.userSub.id) {
      return new BadRequestException({
        success: false,
        message: 'The client does not exist',
      });
    }

    if (!client.active) {
      return new BadRequestException({
        success: false,
        message: 'The client is not a subscriber',
      });
    }

    if (!sessionId) {
      return new BadRequestException({
        success: false,
        message: 'No training session provided',
      });
    }

    const trainingSession =
      await this.trainingSessionService.findOne(sessionId);

    const existingInscription = await this.bookingRepository.findOne({
      where: {
        client: { id: client.userSub.id },
        session: { id: trainingSession.id },
      },
      relations: ['client', 'session'],
    });

    if (existingInscription) {
      return new BadRequestException({
        success: false,
        message: 'The client is already enrolled in this session',
      });
    }

    const inscription = this.bookingRepository.create({
      client: client.userSub,
      session: trainingSession,
    });

    const response = await this.bookingRepository.save(inscription);

    return { response, success: true };
  }

  async findUserClasses(email: string) {
    const client = await this.clientService.findActiveSubscription(email);

    if (!client.userSub.id) {
      return new BadRequestException({
        success: false,
        message: 'The client does not exist',
      });
    }

    const userClassess = await this.bookingRepository.find({
      where: { client: { id: client.userSub.id } },
      relations: ['session', 'session.trainer'],
    });

    console.log('las clases ', userClassess);

    if (!userClassess) {
      return new BadRequestException({
        success: false,
        message: 'The client does not have classes',
      });
    }

    return userClassess;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
