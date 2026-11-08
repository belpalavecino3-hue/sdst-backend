import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateEmergenciaDto {
  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'Por favor, ingresá el nombre de la emergencia.' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres.' })
  nombre: string;

  @IsString({ message: 'El número debe ser un texto.' })
  @IsNotEmpty({ message: 'El número de teléfono o emergencias es obligatorio.' })
  @MaxLength(10, { message: 'El número no puede superar los 10 caracteres.' })
  numero: string;

  @IsString({ message: 'La descripción debe ser un texto.' })
  @IsNotEmpty({ message: 'La descripción del servicio es obligatoria.' })
  descripcion: string;

  @IsString({ message: 'El icono debe ser un texto.' })
  @IsNotEmpty({ message: 'Por favor, indicá el nombre del icono para la vista.' })
  @MaxLength(50, { message: 'El icono no puede superar los 50 caracteres.' })
  icono: string;

  @IsString({ message: 'El color debe ser un texto.' })
  @IsNotEmpty({ message: 'Por favor, indicá el color de la tarjeta o alerta.' })
  @MaxLength(20, { message: 'El color no puede superar los 20 caracteres.' })
  color: string;

  @IsBoolean({ message: 'El campo gratuito debe ser un valor verdadero o falso.' })
  @IsOptional()
  gratuito?: boolean;

  @IsInt({ message: 'El ID del terremoto debe ser un número entero.' })
  @IsOptional()
  terremoto_id?: number;

  @IsInt({ message: 'El ID del hospital debe ser un número entero.' })
  @IsOptional()
  hospital_id?: number;

  @IsInt({ message: 'El ID del usuario debe ser un número entero.' })
  @IsOptional()
  usuario_id?: number;
}