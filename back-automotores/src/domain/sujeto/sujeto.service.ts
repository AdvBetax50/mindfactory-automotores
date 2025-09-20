import { Injectable } from '@nestjs/common';
import { Sujeto } from './sujeto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  async create(body): Promise<Sujeto[]> {
    return this.sujetoRepository.find({
    });
  }
}
