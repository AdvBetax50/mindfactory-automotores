import { IsString, IsNotEmpty, IsInt, Min, Length, IsDateString } from 'class-validator';

export class CreateAutomotorDto {
  @IsString()
  @IsNotEmpty()
  dominio: string;

  @IsString()
  numero_chasis: string;

  @IsString()
  numero_motor: string;

  @IsString()
  color: string;

  @IsInt()
  @IsNotEmpty()
  @Min(190001)
  // TODO: set MAX for today date
  fecha_fabricacion: number;

  @IsDateString()
  @IsNotEmpty()
  fecha_alta_registro: string;

  @IsString()
  @IsNotEmpty()
  @Length(11, 11, { message: 'CUIT must be exactly 11 characters long' })
  cuit_duenio: string;

  @IsInt()
  @IsNotEmpty()
  objeto_id: number;
}
