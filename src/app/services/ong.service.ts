import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ong } from '../Ong';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OngService {
  ongs: Ong[] = [
    {
      nombre_institucion:"Asociación Ruwan Perú",
      tipo_entidad:"ONGD",
      representante:"Julio Cesar Herrada Alejos",
      celular:["084 2608250","987370319"],
      correo:"contacto@ruwanperu.org",
      enlace_web:"www.ruwanperu-org",
      direccion:{
          detalle:"Av. Aviación 4785 - Of. 401",
          provincia:"Santiago de Surco",
          distrito:"Lima",
      },
      dir_img:"../assets/images/ASOCIACIÓN RUWAN PERU.jfif",
      nombre_proyecto:"Piloto construyendo una escuela para el mañana",
      sector: ["Ambiente", "Educación"],
      estado:"En inicio",
      posicion:{
          lat:-12.123193307346492, 
          lng:-76.99866423231006
      }
    },
    {
      nombre_institucion:"Asociación Civil Religiosa DIOSPI Suyana",
      tipo_entidad:"ENIEX",
      representante:"Alberto Ruben Arango de la Torre",
      celular:["084-275032"],
      correo:"arangodlt@suyana.org",
      enlace_web:"https://suyana.org/es/where/peru/",
      direccion:{
          detalle:"Urbanización Santa María L-17",
          provincia:"San Jeronimo",
          distrito:"Cusco",
      },
      dir_img:"assets/images/civil_Religiosa.jpg",
      nombre_proyecto:"Programa municipio saludable - PMS Cusco",
      sector: ["Educación", "Salud"],
      estado:"En ejecución",
      posicion:{
          lat:-13.522585140146541,
          lng:-71.9000643129725
      }
    }
  ];


  private apiUrl = 'URL_API'; 
  constructor(private http: HttpClient) {}

  //servicio listar todo
  listOngs(): Observable<Ong[]> {
    return of(this.ongs);
  }

  //filtar por provincia
  getOngByProvincia(provincia: string): Observable<Ong[]> {
    return of(this.ongs.filter(ong => ong.direccion.provincia.toLowerCase() === provincia.toLowerCase()));
  }


}
