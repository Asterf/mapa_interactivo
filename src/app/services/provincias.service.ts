import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ubigeo } from '../models/ubigeo';
import { arrayProvincias } from '../data/provincias';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  public provincias: Ubigeo[] =arrayProvincias;
  
  private apiUrl = 'URL_API'; 
  constructor(private http: HttpClient) {}


  listProvinciasCusco(): Observable<Ubigeo[]> {
    return of(this.provincias);
  }

}
