import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientWithSubscriptionDto } from './dto/create-client-sub';
import { Subscriptions } from '../subscriptions/entities/subscriptions.entity';
import { PlanStatus, PlanType } from '../types/plan_type.enum';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(Subscriptions)
    private subscriptionsRepository: Repository<Subscriptions>,
  ) {}

  async create(createClientWithSubDto: CreateClientWithSubscriptionDto) {
    try {
      const existingClient = await this.clientRepository.findOne({
        where: { email: createClientWithSubDto.email },
        relations: ['subscription'],
      });

      if (existingClient.subscription.status === PlanStatus.ACTIVE) {
        console.log('subscription');
        return { message: 'The user is already subscribed' };
      }

      const newSubscription = this.subscriptionsRepository.create({
        plan_type: createClientWithSubDto.plan_type,
        status: PlanStatus.ACTIVE,
        start_date: new Date(),
        end_date: this.calculateEndDate(createClientWithSubDto.plan_type),
      });

      const subscription =
        await this.subscriptionsRepository.save(newSubscription);

      if (existingClient) {
        await this.clientRepository.update(existingClient.id, {
          subscription: { id: subscription.id } as any,
        });

        return { id: existingClient.id, subscriptionId: subscription.id };
      }

      const newClient = this.clientRepository.create({
        ...createClientWithSubDto,
        subscription: { id: newSubscription.id } as any,
      });

      await this.clientRepository.save(newClient);

      return { id: newClient.id, subscriptionId: newSubscription.id };
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('El cliente ya existe');
      }
      throw new InternalServerErrorException('Error al crear el cliente');
    }
  }

  private calculateEndDate(planType: PlanType): Date {
    const startDate = new Date();
    let endDate = new Date();

    switch (planType) {
      case 'monthly':
        endDate.setMonth(startDate.getMonth() + 1);
        break;
      case 'quarterly':
        endDate.setMonth(startDate.getMonth() + 3);
        break;
      case 'annual':
        endDate.setFullYear(startDate.getFullYear() + 1);
        break;
    }

    return endDate;
  }

  findAll() {
    return `This action returns all client`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
