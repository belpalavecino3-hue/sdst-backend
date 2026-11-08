import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, IsLowercase, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'Por favor, ingresá tu nombre completo.' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres.' })
  nombre: string;

  @IsEmail({}, { message: 'Ingresá un correo electrónico válido (ejemplo: usuario@gmail.com).' })
  @IsLowercase({ message: 'El correo electrónico debe estar completamente en minúsculas.' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  @MaxLength(100, { message: 'El correo electrónico no puede superar los 100 caracteres.' })
  email: string;

  @IsString({ message: 'La contraseña debe ser un texto.' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @MinLength(6, { message: 'La contraseña debe contener al menos 6 caracteres por seguridad.' })
  @MaxLength(255, { message: 'La contraseña no puede superar los 255 caracteres.' })
  @Matches(/^[a-zA-Z0-9]+$/, { 
    message: 'La contraseña solo puede contener letras y números, sin caracteres especiales.' 
  })
  password: string;

  @IsOptional()
  @IsString({ message: 'Por favor, seleccioná un perfil de usuario válido.' })
  @IsIn(['ADMIN', 'OPERADOR', 'CIUDADANO'], { 
    message: 'El tipo de usuario debe ser Administrador, Operador o Ciudadano.' 
  })
  rol?: string;
}