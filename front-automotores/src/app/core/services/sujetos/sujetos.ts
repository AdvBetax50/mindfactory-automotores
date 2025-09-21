import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SujetoDto } from '../../dtos/sujeto/sujeto.dto';

@Injectable({
  providedIn: 'root'
})
export class SujetosService {
  apiUrl = `${environment.apiBaseUrl}/sujetos`;

  constructor(private http: HttpClient) { }

  getSujetos(): Observable<SujetoDto[]> {
    return this.http.get<SujetoDto[]>(this.apiUrl);
  }
}
