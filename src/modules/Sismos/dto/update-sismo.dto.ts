import { PartialType } from '@nestjs/mapped-types';
import { CreateSismoDto } from './create-sismo.dto.js';

export class UpdateSismoDto extends PartialType(CreateSismoDto) {}
