import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomotorModule } from './application/automotor/automotor.module';
import { ObjetoDeValorModule } from './application/objeto-de-valor/objeto-de-valor.module';
import { SharedModule } from './modules/shared/shared.module';
import { SujetoModule } from './application/sujeto/sujeto.module';
import { VinculoSujetoObjetoModule } from './application/vinculo-sujeto-objeto/vinculo-sujeto-objeto.module';
import { Automotor } from './domain/automotor/automotor.entity';
import { ObjetoDeValor } from './domain/objeto-de-valor/objeto-de-valor.entity';
import { Sujeto } from './domain/sujeto/sujeto.entity';
import { VinculoSujetoObjeto } from './domain/vinculo-sujeto-objeto/vinculo-sujeto-objeto.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {
        type: "postgres",
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USER || "app_user",
        password: process.env.DB_PASSWORD || "secret_123",
        database: process.env.DB_NAME || "mf-auto",
        logging: true,
        entities: [Automotor, ObjetoDeValor, Sujeto, VinculoSujetoObjeto],
        migrations: [__dirname + '/migrations/*.ts'],
      }
    ),
    AutomotorModule,
    ObjetoDeValorModule,
    SujetoModule,
    VinculoSujetoObjetoModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
