import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateSujetoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @Length(11, 11, { message: 'CUIT must be exactly 11 characters long' })
  spoCuit: string;
}
