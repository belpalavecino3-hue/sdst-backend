import { PartialType } from '@nestjs/mapped-types';
import { CreateHospitaleDto } from './create-hospitale.dto.js';

export class UpdateHospitaleDto extends PartialType(CreateHospitaleDto) {}
