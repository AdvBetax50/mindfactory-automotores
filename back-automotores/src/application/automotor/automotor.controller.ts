import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AutomotorService } from 'src/domain/automotor/automotor.service';
import { Automotor } from 'src/domain/automotor/automotor.entity';
import { CreateAutomotorDto } from './dtos/create-automotor.dto';
import { UpdateAutomotorDto } from './dtos/update-automotor.dto';

@Controller('automotores')
export class AutomotorController {
  constructor(private readonly automotorService: AutomotorService) { }

  @Get()
  async getAll(): Promise<Automotor[]> {
    return this.automotorService.findAll();
  }

  @Get(':dominio')
  async getByDominio(@Param('dominio') dominio: string): Promise<Automotor | null> {
    return this.automotorService.findByDominio(dominio);
  }

  @Post()
  create(@Body() body: CreateAutomotorDto) {
    return this.automotorService.create(body);
  }

  // TODO: this
  @Put(':dominio')
  update(@Param('id') dominio: string, @Body() body: UpdateAutomotorDto) {
    return this.automotorService.update(dominio, body);
  }

  // TODO: this
  @Delete(':dominio')
  remove(@Param('dominio') dominio: string) {
    return this.automotorService.remove(dominio);
  }
}
