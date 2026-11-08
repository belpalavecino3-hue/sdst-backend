import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateHospitalDto {
  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'Por favor, ingresá el nombre del hospital o centro de salud.' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres.' })
  nombre: string;

  @IsString({ message: 'La dirección debe ser un texto.' })
  @IsNotEmpty({ message: 'La dirección del hospital es obligatoria.' })
  @MaxLength(150, { message: 'La dirección no puede superar los 150 caracteres.' })
  direccion: string;

  @IsString({ message: 'El teléfono debe ser un texto.' })
  @IsNotEmpty({ message: 'El teléfono de guardia o contacto es obligatorio.' })
  @MaxLength(20, { message: 'El teléfono no puede superar los 20 caracteres.' })
  telefono: string;

  @IsString({ message: 'Las especialidades deben ser un texto.' })
  @IsOptional()
  especialidades?: string;

  @IsBoolean({ message: 'El campo de guardia 24hs debe ser verdadero o falso.' })
  @IsOptional()
  guardia24hs?: boolean;
}