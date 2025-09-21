import { Injectable } from '@nestjs/common';
import { Sujeto } from './sujeto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSujetoDto } from 'src/application/sujeto/dtos/create-sujeto.dto';

@Injectable()
export class SujetoService {

  constructor(
    @InjectRepository(Sujeto)
    private readonly sujetoRepository: Repository<Sujeto>,
  ) { }

  async findAll(): Promise<Sujeto[]> {
    return this.sujetoRepository.find({});
  }

  async findByCuit(cuit): Promise<Sujeto | null> {
    return this.sujetoRepository.findOne({
      where: { spo_cuit: cuit },
    });
  }

  async create(body: CreateSujetoDto): Promise<Sujeto> {
    const sujeto = this.sujetoRepository.create({
      spo_cuit: body.cuit,
      spo_denominacion: body.denominacion,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return await this.sujetoRepository.save(sujeto);
  }
}
