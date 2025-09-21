import { IsString, IsNotEmpty, Length, MaxLength } from 'class-validator';

export class CreateSujetoDto {
  @IsString()
  @IsNotEmpty()
  @Length(11, 11, { message: 'CUIT must be exactly 11 characters long' })
  cuit: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(160)
  denominacion: string;
}
