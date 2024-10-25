# Gym Management System

Este proyecto es un sistema de gestión para un gimnasio que incluye funcionalidades como la gestión de inscripciones, membresías, pagos, reservas de clases y un calendario con inicio de sesión. La aplicación utiliza una arquitectura de microservicios con NestJS para el backend, Next.js para el frontend y AWS para la infraestructura.

## Tecnologías Utilizadas

- **Backend**: [NestJS](https://nestjs.com/) - Framework para la creación de aplicaciones Node.js.
- **Frontend**: [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web modernas.
- **Base de datos**: [TypeORM](https://typeorm.io/) - ORM para el manejo de la base de datos.
- **Autenticación**: [AWS Cognito](https://aws.amazon.com/cognito/) - Servicio de gestión de identidad y autenticación.
- **Infraestructura**: [Serverless Framework](https://www.serverless.com/) - Framework para despliegues en la nube.
- **Servicios en la nube**: [AWS](https://aws.amazon.com/) - Servicios utilizados incluyen Lambda, API Gateway y bases de datos gestionadas.

## Funcionalidades

- **Gestión de Usuarios**: Creación, edición y eliminación de usuarios con diferentes roles (Admin, Trainer, Client) usando AWS Cognito.
- **Gestión de Membresías**: Manejo de diferentes planes de precios (mensual, trimestral y anual) y asignación de membresías a los usuarios.
- **Reservas de Clases**: Inscripción de usuarios en clases disponibles, evitando duplicados para la misma sesión.
- **Calendario**: Visualización de clases y reservas, incluyendo la gestión de entrenadores y sus sesiones.
- **Pagos**: Integración con servicios de pago para la gestión de membresías.
