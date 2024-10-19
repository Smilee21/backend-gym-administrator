import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscriptions } from './entities/subscriptions.entity';
import { Repository } from 'typeorm';
import { ClientService } from 'src/client/client.service';
import { Client } from 'src/client/entities/client.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    private readonly clientService: ClientService,
    @InjectRepository(Subscriptions)
    private subscriptionsRepository: Repository<Subscriptions>,
  ) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {}

  findAll() {
    return `This action returns all subscriptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
