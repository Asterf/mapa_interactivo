import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ong } from '../models/Ong';
import { arrayOneges } from '../data/ongs';

@Injectable({
  providedIn: 'root'
})
export class OngService {
  ongs: Ong[] =arrayOneges;


  private apiUrl = 'URL_API'; 
  constructor(private http: HttpClient) {}

  //servicio listar todo
  listOngs(): Observable<Ong[]> {
    return of(this.ongs);
  }

  
  //FILTRO
  getOngByProvincia(provincia: string): Observable<Ong[]> {
    return of(this.ongs.filter(ong => ong.direccion.provincia.toLowerCase() === provincia.toLowerCase()));
  }
  getProyectoBypProvincia(distrito: string): Observable<Ong[]> {
    const ongsWithProvincia = this.ongs.filter(ong => {
      return ong.proyectos.some(proyecto => proyecto.ambito_intervencion.distrito.toLowerCase() === distrito.toLowerCase());
    });
    return of(ongsWithProvincia);
  }
  getProyectoBySector(sector:string):Observable<Ong[]>{

    // Filtrar las ONGs que tienen al menos un proyecto con el sector buscado
    const ongsFiltradas = this.ongs.filter((ong) =>
      ong.proyectos.some((proyecto) => proyecto.sector.includes(sector))
    );
    console.log(ongsFiltradas)
    return of(ongsFiltradas);
  }

  getOngProvincias(): Observable<String[]> {
    return of(this.ongs.map(ong => ong.direccion.provincia));
  }

  getProyectoProvincias(): Observable<String[]> {
    const provinciasUnicas = new Set<string>();

    this.ongs.forEach((ong) => {
      ong.proyectos.forEach((proyecto) => {
        provinciasUnicas.add(proyecto.ambito_intervencion.distrito);
      });
    });
    return of(Array.from(provinciasUnicas));
  }
  
  getSectores(){
    const sectoresUnicos = new Set<string>();
    for (const ong of this.ongs) {
      for (const proyecto of ong.proyectos) {
        for (const sector of proyecto.sector) {
          sectoresUnicos.add(sector);
        }
      }
    }
    return Array.from(sectoresUnicos);
  }

  getTodasProvincias(): Observable<string[]> {
    let lista1 = this.ongs.map(ong => ong.direccion.provincia);
    let lista2 = new Set<string>();
  
    this.ongs.forEach(ong => {
      ong.proyectos.forEach(proyecto => {
        lista2.add(proyecto.ambito_intervencion.distrito);
      });
    });
    let listaUnica = Array.from(new Set([...lista1, ...lista2]));
    return of(listaUnica);
  }

}
