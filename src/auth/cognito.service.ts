import { Injectable } from '@nestjs/common';
import {
  CognitoIdentityProviderClient,
  ConfirmSignUpCommand,
  ResendConfirmationCodeCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
  ChangePasswordCommand,
  SignUpCommand,
  SignUpCommandInput,
  ConfirmSignUpCommandInput,
  ResendConfirmationCodeCommandInput,
  ForgotPasswordCommandInput,
  ConfirmForgotPasswordCommandInput,
  ChangePasswordCommandInput,
  InitiateAuthCommandInput,
  InitiateAuthCommand,
  RespondToAuthChallengeCommand,
  RespondToAuthChallengeCommandInput,
  GetUserCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { ConfigService } from '@nestjs/config';
import { CognitoClient } from 'src/utils/aws/cognito';

@Injectable()
export class CognitoService {
  private readonly cognitoClient: CognitoIdentityProviderClient;

  constructor(private readonly configService: ConfigService) {
    // Initialize AWS Cognito SDK client
    this.cognitoClient = CognitoClient({
      region: this.configService.get('AWS_COGNITO_REGION'),
    });
  }

  // Signup command
  async signUpCommand(data) {
    const { email, password } = data;

    const params: SignUpCommandInput = {
      ClientId: this.configService.get('AWS_COGNITO_CLIENT_ID'),
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
      ],
    };

    return await this.cognitoClient.send(new SignUpCommand(params));
  }

  // signin Command
  async signInCommand(data) {
    const { email, password } = data;

    const params: InitiateAuthCommandInput = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: this.configService.get('AWS_COGNITO_CLIENT_ID'),
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };

    return await this.cognitoClient.send(
      new InitiateAuthCommand({ ...params }),
    );
  }

  // Confirm signup command
  async confirmSignUpCommand(data) {
    const { email, code } = data;
    const params: ConfirmSignUpCommandInput = {
      ClientId: this.configService.get('AWS_COGNITO_CLIENT_ID'),
      Username: email,
      ConfirmationCode: code,
    };

    return await this.cognitoClient.send(new ConfirmSignUpCommand(params));
  }

  // resend confirmation code
  async resendConfirmationCodeCommand(data) {
    const { email } = data;
    const params: ResendConfirmationCodeCommandInput = {
      ClientId: this.configService.get('AWS_COGNITO_CLIENT_ID'),
      Username: email,
    };

    return await this.cognitoClient.send(
      new ResendConfirmationCodeCommand(params),
    );
  }

  // forgot Passowrd
  async forgotPasswordCommand(data) {
    const { email } = data;
    const params: ForgotPasswordCommandInput = {
      ClientId: this.configService.get('AWS_COGNITO_CLIENT_ID'),
      Username: email,
    };

    return await this.cognitoClient.send(new ForgotPasswordCommand(params));
  }

  // confirm forgot password
  async confirmForgotPasswordCommand(data) {
    const { email, confirmationCode, password } = data;
    const params: ConfirmForgotPasswordCommandInput = {
      ClientId: this.configService.get('AWS_COGNITO_CLIENT_ID'),
      Username: email,
      ConfirmationCode: confirmationCode,
      Password: password,
    };

    return await this.cognitoClient.send(
      new ConfirmForgotPasswordCommand(params),
    );
  }

  // change password using accessToken
  async changePasswordCommand(data) {
    const { accessToken, oldPassword, newPassword } = data;
    const params: ChangePasswordCommandInput = {
      AccessToken: accessToken,
      PreviousPassword: oldPassword,
      ProposedPassword: newPassword,
    };

    return await this.cognitoClient.send(new ChangePasswordCommand(params));
  }
}
