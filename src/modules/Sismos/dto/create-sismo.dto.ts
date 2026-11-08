import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength, Min } from 'class-validator';

export class CreateSismoDto {
  @IsString({ message: 'El tipo o categoría del sismo debe ser un texto.' })
  @IsNotEmpty({ message: 'Por favor, ingresá la categoría del sismo (ejemplo: Leve, Moderado, Severo).' })
  @MinLength(3, { message: 'El tipo debe tener al menos 3 caracteres.' })
  @MaxLength(50, { message: 'El tipo no puede superar los 50 caracteres.' })
  tipo: string;

  @IsString({ message: 'La descripción debe ser un texto.' })
  @IsNotEmpty({ message: 'La descripción de la categoría es obligatoria.' })
  descripcion: string;

  @IsNumber({}, { message: 'La magnitud mínima debe ser un número.' })
  @Min(0, { message: 'La magnitud mínima no puede ser menor a 0.' })
  @IsOptional()
  magnitudMinima?: number;

  @IsNumber({}, { message: 'La magnitud máxima debe ser un número.' })
  @Min(0, { message: 'La magnitud máxima no puede ser menor a 0.' })
  @IsOptional()
  magnitudMaxima?: number;
}