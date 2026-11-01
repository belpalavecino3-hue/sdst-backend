import { PartialType } from '@nestjs/mapped-types';
import { CreateAppDto } from './create-app.dto.js';

export class UpdateAppDto extends PartialType(CreateAppDto) {}
