import { SetMetadata } from '@nestjs/common';

// Define el decorador `@Roles` que acepta múltiples roles y los almacena como metadatos
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
