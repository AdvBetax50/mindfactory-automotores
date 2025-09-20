import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  Index,
  JoinColumn,
} from 'typeorm';
import { ObjetoDeValor } from '../../objeto-de-valor/domain/objeto-de-valor.entity';
import { Sujeto } from '../../sujeto/domain/sujeto.entity';

@Entity('Vinculo_Sujeto_Objeto')
@Index('idx_vso_ovp', ['vso_ovp_id'])
@Index('idx_vso_spo', ['vso_spo_id'])
export class VinculoSujetoObjeto {
  @PrimaryGeneratedColumn({ name: 'vso_id', type: 'bigint' })
  vso_id: number;

  @Column({ name: 'vso_ovp_id', type: 'bigint' })
  vso_ovp_id: number;

  @Column({ name: 'vso_spo_id', type: 'bigint' })
  vso_spo_id: number;

  @ManyToOne(() => ObjetoDeValor, (objeto) => objeto.vinculos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'vso_ovp_id' })
  objetoDeValor: ObjetoDeValor;

  @ManyToOne(() => Sujeto, (sujeto) => sujeto.vinculos, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'vso_spo_id' })
  sujeto: Sujeto;

  @Column({ name: 'vso_tipo_vinculo', type: 'varchar', length: 30, default: 'DUENO' })
  vso_tipo_vinculo: string;

  @Column({ name: 'vso_porcentaje', type: 'numeric', precision: 5, scale: 2, default: 100 })
  vso_porcentaje: number;

  @Column({ name: 'vso_responsable', type: 'char', length: 1, default: 'S' })
  vso_responsable: string;

  @Column({ name: 'vso_fecha_inicio', type: 'date', default: () => 'CURRENT_DATE' })
  vso_fecha_inicio: Date;

  @Column({ name: 'vso_fecha_fin', type: 'date', nullable: true })
  vso_fecha_fin: Date | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
