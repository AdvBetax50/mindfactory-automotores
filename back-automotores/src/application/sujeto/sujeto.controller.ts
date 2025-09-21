import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { SujetoService } from '../../domain/sujeto/sujeto.service';
import { Sujeto } from 'src/domain/sujeto/sujeto.entity';
import { CreateSujetoDto } from './dtos/create-sujeto.dto';

@Controller('sujetos')
export class SujetoController {

  constructor(private readonly sujetoService: SujetoService) { }

  @Get()
  async getAll(): Promise<Sujeto[]> {
    return this.sujetoService.findAll();
  }

  @Get('by-cuit')
  async getByCuit(@Query('cuit') cuit: number): Promise<Sujeto | null> {
    return this.sujetoService.findByCuit(cuit);
  }

  @Post()
  create(@Body() body: CreateSujetoDto) {
    return this.sujetoService.create(body);
  }
}


