import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AutomotorDto } from '../../dtos/automotor/automotor.dto';

@Injectable({
  providedIn: 'root'
})
export class AutomotoresService {

  apiUrl = `${environment.apiBaseUrl}/automotores`;

  constructor(private http: HttpClient) { }

  getAutomotores(): Observable<AutomotorDto[]> {
    return this.http.get<AutomotorDto[]>(this.apiUrl);
  }

}
