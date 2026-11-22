import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { isPrismaUniqueConstraintError } from '../prisma/prisma-error.utils.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { RegisterAuthDto } from './dto/register-auth.dto.js';
import { hashPassword, verifyPassword } from './password.util.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerAuthDto: RegisterAuthDto) {
    const passwordHash = await hashPassword(registerAuthDto.password);

    try {
      const user = await this.prisma.usuarios.create({
        data: {
          nombre: registerAuthDto.nombre,
          email: registerAuthDto.email,
          password: passwordHash,
          rol: registerAuthDto.rol,
        },
        select: {
          id: true,
          nombre: true,
          email: true,
          rol: true,
          creado_en: true,
        },
      });

      return user;
    } catch (error) {
      if (isPrismaUniqueConstraintError(error)) {
        throw new ConflictException(
          'Ya existe una cuenta con ese correo electrónico.',
        );
      }

      throw error;
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.prisma.usuarios.findUnique({
      where: { email: loginAuthDto.email },
    });

    if (
      !user ||
      !(await verifyPassword(loginAuthDto.password, user.password))
    ) {
      throw new UnauthorizedException('Correo o contraseña incorrectos.');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      rol: user.rol,
    });

    return {
      access_token: accessToken,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
        creado_en: user.creado_en,
      },
    };
  }
}