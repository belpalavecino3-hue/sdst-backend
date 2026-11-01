import { PartialType } from '@nestjs/mapped-types';
import { CreateLoginDto } from './create-login.dto.js';

export class UpdateLoginDto extends PartialType(CreateLoginDto) {}
