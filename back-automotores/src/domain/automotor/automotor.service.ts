import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Automotor } from 'src/domain/automotor/automotor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutomotorService {

  constructor(
    @InjectRepository(Automotor)
    private readonly automotorRepository: Repository<Automotor>,
  ) { }

  async findAll(): Promise<Automotor[]> {
    return this.automotorRepository.find({
      relations: ['objetoDeValor']
    });
  }

  async findByDominio(dominio): Promise<Automotor | null> {
    return this.automotorRepository.findOne({
      where: { atr_dominio: dominio },
    });
  }

  async create(body): Promise<Automotor[]> {
    return this.automotorRepository.find({
    });
  }

  async update(dominio, body): Promise<Automotor[]> {
    return this.automotorRepository.find({
    });
  }

  async remove(dominio): Promise<Automotor[]> {
    return this.automotorRepository.find({
    });
  }
}
