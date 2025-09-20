import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Automotor } from '../automotor/automotor.entity';
import { VinculoSujetoObjeto } from '../vinculo-sujeto-objeto/vinculo-sujeto-objeto.entity';

@Entity('Objeto_De_Valor')
export class ObjetoDeValor {
  @PrimaryGeneratedColumn({ name: 'ovp_id', type: 'bigint' })
  ovp_id: number;

  @Column({ name: 'ovp_tipo', type: 'varchar', length: 30, default: 'AUTOMOTOR' })
  ovp_tipo: string;

  @Column({ name: 'ovp_codigo', type: 'varchar', length: 64, unique: true })
  ovp_codigo: string;

  @Column({ name: 'ovp_descripcion', type: 'varchar', length: 240, nullable: true })
  ovp_descripcion: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @OneToMany(() => Automotor, (a) => a.objetoDeValor)
  automotores: Automotor[];

  @OneToMany(() => VinculoSujetoObjeto, (v) => v.objetoDeValor)
  vinculos: VinculoSujetoObjeto[];
}
