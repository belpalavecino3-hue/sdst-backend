import { 
  IsDateString, 
  IsNotEmpty, 
  IsNumber, 
  IsOptional, 
  IsString, 
  MaxLength, 
  MinLength, 
  Min, 
  Max 
} from 'class-validator';

export class CreateTerremotoDto {
  @IsString({ message: 'El epicentro o ubicación debe ser un texto.' })
  @IsNotEmpty({ message: 'Por favor, ingresá la ubicación o epicentro del sismo.' })
  @MinLength(3, { message: 'El epicentro debe tener al menos 3 caracteres.' })
  @MaxLength(150, { message: 'El epicentro no puede superar los 150 caracteres.' })
  epicentro: string;

  @IsNumber({}, { message: 'La magnitud debe ser un valor numérico.' })
  @IsNotEmpty({ message: 'La magnitud del sismo es obligatoria.' })
  @Min(0, { message: 'La magnitud no puede ser menor a 0.' })
  @Max(10, { message: 'La magnitud no puede ser mayor a 10.' })
  magnitud: number;

  @IsNumber({}, { message: 'La profundidad debe ser un valor numérico.' })
  @IsNotEmpty({ message: 'La profundidad (en km) es obligatoria.' })
  @Min(0, { message: 'La profundidad no puede ser negativa.' })
  profundidad: number;

  @IsDateString({}, { message: 'La fecha y hora deben tener un formato de fecha válido.' })
  @IsNotEmpty({ message: 'La fecha y hora del evento son obligatorias.' })
  fechaHora: string;

  @IsString({ message: 'El estado de la alerta debe ser un texto.' })
  @IsOptional()
  @MaxLength(50, { message: 'El estado no puede superar los 50 caracteres.' })
  estado?: string;

  @IsNumber({}, { message: 'El ID del sismo/tipo debe ser un número entero.' })
  @IsOptional()
  sismo_id?: number;
}