import { PartialType } from '@nestjs/mapped-types';
import { CreateSujetoDto } from './create-sujeto.dto';

export class UpdateSujetoDto extends PartialType(CreateSujetoDto) { }
