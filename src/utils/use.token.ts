import {
  AuthAccesTokenResult,
  IUseToken,
} from 'src/auth/interfaces/auth.interface';
import * as jwt from 'jsonwebtoken';

export const useToken = (token: string): IUseToken | string => {
  try {
    const decode = jwt.decode(token) as AuthAccesTokenResult;

    const currentDate = new Date();
    const expiresDate = new Date(decode.exp);

    return {
      sub: decode.sub,
      username: decode.username,
      isExpired: +expiresDate <= +currentDate / 1000,
    };
  } catch (e) {
    return 'invalid token';
  }
};
