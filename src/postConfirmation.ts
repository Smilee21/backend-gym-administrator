import { CognitoIdentityServiceProvider } from 'aws-sdk';

const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();

export const handler = async (event: any) => {
  const userPoolId = process.env.USER_POOL_ID;
  const username = event.request.userAttributes.email;

  try {
    await cognitoIdentityServiceProvider
      .adminAddUserToGroup({
        UserPoolId: userPoolId!,
        Username: username,
        GroupName: 'Client',
      })
      .promise();

    console.log(`Usuario ${username} añadido al grupo Client`);
    return event;
  } catch (error) {
    console.error('Error al añadir el usuario al grupo:', error);
    throw error;
  }
};
