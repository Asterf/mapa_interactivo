import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import Swal from 'sweetalert2';
import { Ong } from './Ong';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  //Obtener punto central
  calculateAveragePosition(ongs: Ong[]) {
    if (ongs.length === 0) {
      return {lat:-13.515271483270629, lng: -71.97872042823884}; // Retorna null si la lista de marcadores está vacía.
    }
    let sumLat = 0;
    let sumLng = 0;
  
    for (const ong of ongs) {
      sumLat += ong.posicion.lat;
      sumLng += ong.posicion.lng;
    }
  
    const averageLat = sumLat / ongs.length;
    const averageLng = sumLng / ongs.length;
  
    return { lat: averageLat, lng: averageLng };
  }
  
  //Personalización del marcardor
  iconBase:string ="https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png?hl=es-419";
  text:string = "<p>Telefono: 123456</p> <p>Correo: test@gmail.com</p>"
  //Función para generar ventana de información
  openInfoWindow(ong: Ong) {
    Swal.fire({
      title: ong.nombre_institucion,
      html: this.text,
      // text: "Email: "+ ong.correo + "\n\nTeléfono: "+ong.celular[0]+"\nDirección: "+ong.direccion.detalle,
      imageUrl: ong.dir_img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Image",
    })
  }
  print(){
    console.log("salto\nde linea")
  }
  //Declarar lista de ongs
  Ongs:Ong[] =[
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
  ]
  //Acomodar mapa
  center = this.calculateAveragePosition(this.Ongs)
  zoom:number = 6.5
}