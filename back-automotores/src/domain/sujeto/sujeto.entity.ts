import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { VinculoSujetoObjeto } from '../vinculo-sujeto-objeto/vinculo-sujeto-objeto.entity';

@Entity('Sujeto')
export class Sujeto {
  @PrimaryGeneratedColumn({ name: 'spo_id', type: 'bigint' })
  spo_id: number;

  @Column({ name: 'spo_cuit', type: 'varchar', length: 11, unique: true })
  @Index({ unique: true })
  spo_cuit: string;

  @Column({ name: 'spo_denominacion', type: 'varchar', length: 160 })
  spo_denominacion: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @OneToMany(() => VinculoSujetoObjeto, (v) => v.sujeto)
  vinculos: VinculoSujetoObjeto[];
}
