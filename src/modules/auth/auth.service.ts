import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { verifyPassword } from './password.util.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}


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