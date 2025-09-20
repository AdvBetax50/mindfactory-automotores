import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateAutomotorDto {
  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsString()
  @IsNotEmpty()
  patente: string;

  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  anio: number;
}
