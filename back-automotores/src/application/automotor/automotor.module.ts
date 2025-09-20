import { Module } from '@nestjs/common';
import { AutomotorController } from './automotor.controller';
import { AutomotorService } from 'src/domain/automotor/automotor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automotor } from 'src/domain/automotor/automotor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Automotor])],
  controllers: [AutomotorController],
  providers: [AutomotorService],
})
export class AutomotorModule { }
