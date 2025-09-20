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

@Entity('Automotores')
@Index('idx_automotores_ovp', ['atr_ovp_id'])
export class Automotor {
  @PrimaryGeneratedColumn({ name: 'atr_id', type: 'bigint' })
  atr_id: number;

  @Column({ name: 'atr_ovp_id', type: 'bigint' })
  atr_ovp_id: number;

  @ManyToOne(() => ObjetoDeValor, (objeto) => objeto.automotores, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'atr_ovp_id' })
  objetoDeValor: ObjetoDeValor;

  @Column({ name: 'atr_dominio', type: 'varchar', length: 8, unique: true })
  atr_dominio: string;

  @Column({ name: 'atr_numero_chasis', type: 'varchar', length: 25, nullable: true })
  atr_numero_chasis: string | null;

  @Column({ name: 'atr_numero_motor', type: 'varchar', length: 25, nullable: true })
  atr_numero_motor: string | null;

  @Column({ name: 'atr_color', type: 'varchar', length: 40, nullable: true })
  atr_color: string | null;

  @Column({ name: 'atr_fecha_fabricacion', type: 'int' })
  atr_fecha_fabricacion: number; // YYYYMM

  @CreateDateColumn({ name: 'atr_fecha_alta_registro', type: 'timestamptz' })
  atr_fecha_alta_registro: Date;
}
