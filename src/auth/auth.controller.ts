import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { CognitoService } from './cognito.service';
import { ValidationDataUserDto } from './dto/validation-data-user.dto';
import { EmailUserDto } from './dto/email-user.dto';
import { ForgotPasswordDto } from './dto/forgot-pass.dto';
import { ChangePassDto } from './dto/change-pass.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly cognitoService: CognitoService) {}

  @Post('signup')
  async signUp(@Body() user: UserDto) {
    const { email, password } = user;
    const result = await this.cognitoService.signUpCommand({ email, password });
    console.log(result);
    return result;
  }

  @Post('register/resend-code')
  async resendConfirmationCode(@Body() email: EmailUserDto) {
    const result =
      await this.cognitoService.resendConfirmationCodeCommand(email);
    console.log(result);
    return result;
  }

  @Post('signup/validate')
  async validateUser(@Body() data: ValidationDataUserDto) {
    const result = await this.cognitoService.confirmSignUpCommand(data);
    console.log(result);
    return result;
  }

  @Post('signin')
  async signin(@Body() user: UserDto) {
    const result = await this.cognitoService.signInCommand(user);
    console.log(result);
    return result;
  }

  @Post('forgot-password')
  async forgotPassword(@Body() email: EmailUserDto) {
    const result = await this.cognitoService.forgotPasswordCommand(email);
    console.log(result);
    return result;
  }

  @Post('forgot-password-confirmation')
  async confirmForgotPassword(@Body() data: ForgotPasswordDto) {
    const result = await this.cognitoService.confirmForgotPasswordCommand(data);
    console.log(result);
    return result;
  }

  @Post('change-password')
  async changePassword(@Body() data: ChangePassDto) {
    const result = await this.cognitoService.changePasswordCommand(data);
    console.log(result);
    return result;
  }
}
