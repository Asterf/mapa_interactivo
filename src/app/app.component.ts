import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marker } from './Marker';
import Swal from 'sweetalert2';
import { Ong } from './Ong';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //Lista de marcadores
  markers:Marker[] = []
  center = {
    lat: -13.515271483270629,
    lng: -71.97872042823884
  }
  //Obtener punto central
  calculateAveragePosition(markers: Marker[]) {
    if (markers.length === 0) {
      return {lat:-13.515271483270629, lng: -71.97872042823884}; // Retorna null si la lista de marcadores está vacía.
    }
    let sumLat = 0;
    let sumLng = 0;
  
    for (const marker of markers) {
      sumLat += marker.position.lat;
      sumLng += marker.position.lng;
    }
  
    const averageLat = sumLat / markers.length;
    const averageLng = sumLng / markers.length;
  
    return { lat: averageLat, lng: averageLng };
  }

  //Personalización del marcardor
  iconBase:string ="https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png?hl=es-419";
  
  //Función para generar ventana de información
  openInfoWindow(ong: Ong) {
    Swal.fire({
      title: ong.nombre_proyecto,
      text: ong.nombre_institucion,
      imageUrl: ong.dir_img,
      imageWidth: 300,
      imageHeight: 150,
      imageAlt: ong.dir_img,
    })
  }

  //Función para agregar un nuevo marcador con posición aleatoria
  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 1000,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 1000,
      },
      label: {
        color: 'black',
        text: ' ',
      },
      title: 'Marker title ' + (this.markers.length + 1),
    });
    this.center= this.calculateAveragePosition(this.markers)
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
      dir_img:"assets/images/ASOCIACIÓN RUWAN PERU.jfif",
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
}