import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposSismoDto } from './create-tipos-sismo.dto.js';

export class UpdateTiposSismoDto extends PartialType(CreateTiposSismoDto) {}
