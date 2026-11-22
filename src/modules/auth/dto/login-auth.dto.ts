import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, } from 'class-validator';

export class LoginAuthDto {
  @IsEmail({}, { message: 'El correo electrónico debe tener un formato válido.' })
   @MaxLength(100, { message: 'El correo electrónico no puede superar los 100 caracteres.' })
  email: string;

  @IsString({ message: 'La contraseña debe ser un texto.' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.', })
  @MaxLength(128, { message: 'La contraseña no puede superar los 128 caracteres.', })
  password: string;
}