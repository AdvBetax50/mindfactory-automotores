import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAutomotorDto } from 'src/application/automotor/dtos/create-automotor.dto';
import { UpdateAutomotorDto } from 'src/application/automotor/dtos/update-automotor.dto';
import { Repository } from 'typeorm';
import { Automotor } from 'src/domain/automotor/automotor.entity';
import { ObjetoDeValor } from 'src/domain/objeto-de-valor/objeto-de-valor.entity';

@Injectable()
export class AutomotorService {

  constructor(
    @InjectRepository(Automotor)
    private readonly automotorRepository: Repository<Automotor>,
    @InjectRepository(ObjetoDeValor)
    private readonly objetoRepository: Repository<ObjetoDeValor>,
  ) { }

  async findAll(): Promise<Automotor[]> {
    return this.automotorRepository.find({
      relations: [
        'objetoDeValor',
        'objetoDeValor.vinculos',
        'objetoDeValor.vinculos.sujeto'
      ]
    });
  }

  async findByDominio(dominio): Promise<Automotor | null> {
    return this.automotorRepository.findOne({
      where: { atr_dominio: dominio },
    });
  }

  async create(body: CreateAutomotorDto): Promise<Automotor> {
    const objeto = await this.objetoRepository.findOneBy({ ovp_id: body.objeto_id });
    if (!objeto) {
      throw new Error(`ObjetoDeValor with id ${body.objeto_id} not found`);
    }

    const automotor = this.automotorRepository.create({
      objetoDeValor: objeto,
      atr_dominio: body.dominio,
      atr_numero_chasis: body.numero_chasis ?? null,
      atr_numero_motor: body.numero_motor ?? null,
      atr_color: body.color ?? null,
      atr_fecha_fabricacion: body.fecha_fabricacion,
      atr_fecha_alta_registro: body.fecha_alta_registro,
    });

    return await this.automotorRepository.save(automotor);
  }

  async update(dominio, body: UpdateAutomotorDto): Promise<Automotor[]> {
    return this.automotorRepository.find({
    });
  }

  async remove(dominio): Promise<Automotor[]> {
    return this.automotorRepository.find({
    });
  }
}
