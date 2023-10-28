import { Component } from '@angular/core';
import { Ong } from 'src/app/Ong';
import { OngService } from 'src/app/services/ong.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  public ongs: Ong[]; 
  public markerClustererImagePath = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
  public center;
  public zoom: number;
  
  
  constructor(private ongService: OngService) {
    this.ongs=[];
    this.zoom=  6.5;
    this.center= {lat:-13.515271483270629, lng: -71.97872042823884};
   }

   ngOnInit() {
   this.listarOngs();
  }

  listarOngs()
  {
    this.ongService.listOngs().subscribe((ongs) => {
      this.ongs = ongs;
    });
  }

  filtrarPorProvincia(provincia:string)
  {
    this.ongService.getOngByProvincia(provincia).subscribe((ongs) => {
      this.ongs = ongs;
    });
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
  console.log("salto\nde linea");
  this.filtrarPorProvincia("Cusco");
}

}
