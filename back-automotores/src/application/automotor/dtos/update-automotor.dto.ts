import { PartialType } from '@nestjs/mapped-types';
import { CreateAutomotorDto } from './create-automotor.dto';

export class UpdateAutomotorDto extends PartialType(CreateAutomotorDto) { }
