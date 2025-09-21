import { Component, Input } from '@angular/core';
import { AutomotorDto } from '../../core/dtos/automotor/automotor.dto';
import { SujetoDto } from '../../core/dtos/sujeto/sujeto.dto';
import { Item } from '../item/item';

@Component({
  selector: 'app-entity-list',
  imports: [Item],
  templateUrl: './entity-list.html',
  styleUrl: './entity-list.css'
})
export class EntityList {
  @Input() title: string = 'titulo';
  @Input() list: Array<AutomotorDto | SujetoDto> = [];
}
