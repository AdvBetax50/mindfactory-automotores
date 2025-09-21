import { Component, Input, OnInit } from '@angular/core';
import { AutomotorDto } from '../../core/dtos/automotor/automotor.dto';
import { SujetoDto } from '../../core/dtos/sujeto/sujeto.dto';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {
  @Input() item: any = null;

  getObjectKeys(obj: AutomotorDto | SujetoDto | null): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
