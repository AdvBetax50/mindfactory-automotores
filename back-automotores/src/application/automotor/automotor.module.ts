import { Module } from '@nestjs/common';
import { AutomotorController } from './automotor.controller';
import { AutomotorService } from 'src/domain/automotor/automotor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automotor } from 'src/domain/automotor/automotor.entity';
import { ObjetoDeValor } from 'src/domain/objeto-de-valor/objeto-de-valor.entity';
import { VinculoSujetoObjeto } from 'src/domain/vinculo-sujeto-objeto/vinculo-sujeto-objeto.entity';
import { Sujeto } from 'src/domain/sujeto/sujeto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Automotor, ObjetoDeValor])],
  controllers: [AutomotorController],
  providers: [AutomotorService],
})
export class AutomotorModule { }
