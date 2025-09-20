import { Sujeto } from 'src/domain/sujeto/sujeto.entity';
import { ObjetoDeValor } from 'src/domain/objeto-de-valor/objeto-de-valor.entity';
import { Automotor } from 'src/domain/automotor/automotor.entity';
import { VinculoSujetoObjeto } from 'src/domain/vinculo-sujeto-objeto/vinculo-sujeto-objeto.entity';
import { AppDataSource } from 'data-source';

async function seed() {
  await AppDataSource.initialize();
  console.log('Connected to database...');

  const sujetoRepo = AppDataSource.getRepository(Sujeto);
  const objetoRepo = AppDataSource.getRepository(ObjetoDeValor);
  const automotorRepo = AppDataSource.getRepository(Automotor);
  const vinculoRepo = AppDataSource.getRepository(VinculoSujetoObjeto);

  // 1️⃣ Create a Sujeto (owner)
  const sujeto = sujetoRepo.create({
    spo_cuit: '20304050607',
    spo_denominacion: 'Juan Pérez',
  });
  await sujetoRepo.save(sujeto);

  // 2️⃣ Create Objeto_De_Valor for an Automotor
  const ovp = objetoRepo.create({
    ovp_tipo: 'AUTOMOTOR',
    ovp_codigo: 'ABC123',
    ovp_descripcion: 'Automotor dominio ABC123',
  });
  await objetoRepo.save(ovp);

  // 3️⃣ Create Automotor
  const auto = automotorRepo.create({
    atr_dominio: 'ABC123',
    atr_numero_chasis: 'XYZ987654321',
    atr_numero_motor: 'MTR1234567',
    atr_color: 'Rojo',
    atr_fecha_fabricacion: 202309, // YYYYMM
    objetoDeValor: ovp,
  });
  await automotorRepo.save(auto);

  // 4️⃣ Vinculo: assign Sujeto as owner
  const vinculo = vinculoRepo.create({
    objetoDeValor: ovp,
    sujeto,
    vso_tipo_vinculo: 'DUENO',
    vso_porcentaje: 100,
    vso_responsable: 'S',
    vso_fecha_inicio: new Date(),
  });
  await vinculoRepo.save(vinculo);

  console.log('✅ Seeding completed!');
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('❌ Error seeding database:', err);
  process.exit(1);
});
