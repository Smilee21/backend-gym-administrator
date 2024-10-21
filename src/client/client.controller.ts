import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { UpdateClientDto } from './dto/update-client.dto';
import { CreateClientWithSubscriptionDto } from './dto/create-client-sub';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
@UseGuards(RolesGuard)
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Roles('Client', 'Admin')
  @Post('sub')
  create(@Body() createClientWithSubDto: CreateClientWithSubscriptionDto) {
    return this.clientService.create(createClientWithSubDto);
  }
  @Roles('Client', 'Admin')
  @Get()
  findAll() {
    return this.clientService.findAll();
  }
  @Roles('Client', 'Admin')
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.clientService.findOne(email);
  }

  @Roles('Client', 'Admin')
  @Get('is-active/:email')
  findBySubscription(@Param('email') email: string) {
    return this.clientService.findActiveSubscription(email);
  }

  @Roles('Client', 'Admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }
  @Roles('Admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
