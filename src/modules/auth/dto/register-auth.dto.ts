import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterAuthDto {
  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @MinLength(8, { message: 'El nombre debe tener al menos 8 caracteres.' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres.' })
  nombre: string;

  @IsEmail({}, { message: 'El correo electrónico debe tener un formato válido.' })
  @MaxLength(100, { message: 'El correo electrónico no puede superar los 100 caracteres.' })
  email: string;

  @IsString({ message: 'La contraseña debe ser un texto.' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @MinLength(8, {message: 'La contraseña debe tener al menos 8 caracteres.',})
  @MaxLength(100, {message: 'La contraseña no puede superar los 100 caracteres.',})
  password: string;

  @IsOptional()
  @IsString({ message: 'El rol debe ser un texto.' })
  @MaxLength(60, { message: 'El rol no puede superar los 60 caracteres.' })
  rol?: string;
}