import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Subscriptions } from '../subscriptions/entities/subscriptions.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Subscriptions])],
  controllers: [ClientController],
  providers: [ClientService, JwtService],
  exports: [ClientService],
})
export class ClientModule {}
