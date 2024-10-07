import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
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
    if (!requiredRoles) return true;

    // Obtiene la solicitud HTTP y el token JWT desde los encabezados
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    // Decodifica el token JWT y extrae la información del usuario
    const payload = this.jwtService.decode(token) as any;

    // Extrae los roles del usuario desde el JWT (por ejemplo, `cognito:groups`)
    const userRoles = payload['cognito:groups'] || [];

    // Verifica si el usuario tiene al menos uno de los roles requeridos
    return requiredRoles.some((role) => userRoles.includes(role));
  }
}
