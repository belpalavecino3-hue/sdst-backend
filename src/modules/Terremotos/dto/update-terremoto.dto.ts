import { PartialType } from '@nestjs/mapped-types';
import { CreateTerremotoDto } from './create-terremoto.dto.js';

export class UpdateTerremotoDto extends PartialType(CreateTerremotoDto) {}
