import { Component, ViewChild,HostListener  } from '@angular/core';
import { Ong } from 'src/app/models/Ong';
import { OngService } from 'src/app/services/ong.service';
import Swal from 'sweetalert2';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  isMobile: boolean = false;
  @ViewChild('drawer') drawer!: MatDrawer;
  @HostListener('window:resize', ['$event']) onResize(event: any): void {this.isMobile = window.innerWidth < 700; }

  ongs: Ong[]; 
  markerClustererImagePath = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
  center;
  zoom: number;
  selectedValue = 'todos'; 
  selectedProvincia= "";
  textobuscar = '';
  listProvincias:String[];

  
  constructor(private ongService: OngService) {
    this.ongs=[];
    this.zoom=  6.5;
    this.center= {lat:-13.515271483270629, lng: -71.97872042823884};
    this.listProvincias = [];
   }

   ngOnInit() {
    if (this.drawer) {
      this.drawer.open();
    }
    this.listarOngs();
    this.listarProvinvias();
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

  listarProvinvias()
  {
    if(this.selectedValue=="proyectos")
    {
      this.ongService.getProyectoProvincias().subscribe((ongs) => {
        this.listProvincias = this.eliminarRepetidos(ongs);
      });

    }
    else {
      if(this.selectedValue=="ong")
      {
        this.ongService.getOngProvincias().subscribe((ongs) => {
          this.listProvincias = this.eliminarRepetidos(ongs);
        });
      }
      else{
        this.ongService.getTodasProvincias().subscribe((ongs) => {
          this.listProvincias = this.eliminarRepetidos(ongs);
        });
      }
    }
    
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
    imageUrl: ong.dir_image,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Image",
  })
}


toggleDrawer() {
  if (this.drawer.opened) {
    this.drawer.close();
  } else {
    // Personaliza la animación de cierre para el modo 'over' o 'push'
    this.drawer.open();
  }
}


eliminarRepetidos(lista: String[]): String[] {
  return lista.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
  });
}

buscarOng(){
  this.filtrarPorProvincia(this.selectedProvincia);
  if(this.ongs.length>0)
  {
    this.center = {lat:this.ongs[0].cordenadas.lat, lng:this.ongs[0].cordenadas.lng};
    this.zoom=8;
  }else{
    this.center= {lat:-13.515271483270629, lng: -71.97872042823884};
    this.zoom=6.5;
  }
  
}

}
