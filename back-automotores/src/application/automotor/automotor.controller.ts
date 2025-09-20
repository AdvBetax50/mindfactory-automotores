import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AutomotorService } from 'src/domain/automotor/automotor.service';
import { Automotor } from 'src/domain/automotor/automotor.entity';

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

  // TODO: validar body es de tipo automotor
  @Post()
  create(@Body() body: any) {
    return this.automotorService.create(body);
  }

  // TODO: validar body es de tipo automotor
  @Put(':dominio')
  update(@Param('id') dominio: string, @Body() body: any) {
    return this.automotorService.update(dominio, body);
  }

  @Delete(':dominio')
  remove(@Param('dominio') dominio: string) {
    // remove(@Param('dominio') dominio: string): Promise <> {
    return this.automotorService.remove(dominio);
  }
}
