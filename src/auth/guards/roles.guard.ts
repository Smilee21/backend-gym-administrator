import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    // Obtiene los roles requeridos para la ruta desde el decorador `@Roles`
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    // Si no hay roles requeridos, permite el acceso
    if (!requiredRoles || requiredRoles.length === 0) {
      console.log(!requiredRoles || requiredRoles.length == 0);
      console.log('si entra aqui');
      return true;
    }

    // Obtiene la solicitud HTTP y el token JWT desde los encabezados
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    // Decodifica el token JWT y extrae la información del usuario
    const payload = this.jwtService.decode(token) as any;

    // Verifica si el payload es nulo o indefinido
    if (!payload) {
      throw new UnauthorizedException('Invalid token');
    }

    // Extrae los roles del usuario desde el JWT
    const userRoles = payload['cognito:groups'] || []; // Se asigna un arreglo vacío si no existe

    // Verifica si el usuario tiene al menos uno de los roles requeridos
    const hasRole = requiredRoles.some((role) => userRoles.includes(role));

    // Si no tiene rol, lanza Unauthorized
    if (!hasRole) {
      throw new UnauthorizedException('Insufficient permissions');
    }

    return true;
  }
}
