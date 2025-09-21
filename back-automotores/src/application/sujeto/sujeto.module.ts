import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SujetoController } from './sujeto.controller';
import { SujetoService } from 'src/domain/sujeto/sujeto.service';
import { Sujeto } from 'src/domain/sujeto/sujeto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sujeto])],
  controllers: [SujetoController],
  providers: [SujetoService],
})
export class SujetoModule { }
