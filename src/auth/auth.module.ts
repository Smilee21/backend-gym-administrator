import { Module } from '@nestjs/common';
import { CognitoService } from './cognito.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './jwt.strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [AuthController],
  providers: [
    JwtService,
    CognitoService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AuthModule {}
