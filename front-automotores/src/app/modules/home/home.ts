import { Component, signal, WritableSignal } from '@angular/core';
import { Layout } from "../../core/layout/layout";
import { EntityList } from "../../shared/entity-list/entity-list";
import { AutomotorDto } from '../../core/dtos/automotor/automotor.dto';
import { SujetoDto } from '../../core/dtos/sujeto/sujeto.dto';
import { AutomotoresService } from '../../core/services/automotores/automotores';
import { SujetosService } from '../../core/services/sujetos/sujetos';

@Component({
  selector: 'app-home',
  imports: [Layout, EntityList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  automotoresList: WritableSignal<AutomotorDto[]> = signal([]);
  sujetosList: WritableSignal<SujetoDto[]> = signal([]);

  constructor(
    private automotoresService: AutomotoresService,
    private sujetosService: SujetosService,
  ) {
    this.automotoresService.getAutomotores().subscribe({
      next: (data) => {
        this.automotoresList.update(() => data);
      },
      error: err => {
        console.log('err = ', err)
      }
    });
    this.sujetosService.getSujetos().subscribe({
      next: (data) => {
        this.sujetosList.update(() => data);
      },
      error: err => {
        console.log('err = ', err)
      }
    });
  }
}
