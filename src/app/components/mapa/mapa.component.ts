import { Component, ViewChild,HostListener  } from '@angular/core';
import { Ong } from 'src/app/models/Ong';
import { OngService } from 'src/app/services/ong.service';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { InformacionComponent } from '../informacion/informacion.component';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { Ubigeo } from 'src/app/models/ubigeo';

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
  itemSelectet:string[];
  iconBase:string ="https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png?hl=es-419";
  markerClustererImagePath = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
  center;
  zoom: number;
  selectedValue = 'ong'; 
  selectedProvincia= "";
  textobuscar = '';
  listProvincias:String[];

  
  constructor(
              private ongService: OngService,
              public dialog: MatDialog,
              private provinciaService: ProvinciasService) {
    this.ongs=[];
    this.zoom=  6.5;
    this.center= {lat:-13.515271483270629, lng: -71.97872042823884};
    this.listProvincias = [];
    this.itemSelectet=[];
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
    if(this.selectedValue=="ong")
    {
      console.log("ong");
      this.ongService.getOngByProvincia(provincia).subscribe((ongs) => {
        this.ongs = ongs;
      });
    }
    else {
      console.log("proyecto: "+provincia)
      this.ongService.getProyectoBypProvincia(provincia).subscribe((ongs) => {
        this.ongs = ongs;
      });
    }
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
        this.ongService.getOngProvincias().subscribe((ongs) => {
          this.listProvincias = this.eliminarRepetidos(ongs);
        });
    }
    
  }

openInfoWindow(ong: Ong) {
  this.center = {lat:ong.cordenadas.lat,lng:ong.cordenadas.lng};
  this.zoom=8.5;

  this.dialog.closeAll();
  const dialogRef = this.dialog.open(InformacionComponent, {
      width: '450px',
      data: ong,
      height: '550px',
      hasBackdrop: false
    });

}

toggleDrawer() {
  if (this.drawer.opened) {
    this.drawer.close();
  } else {
    this.drawer.open();
  }
}


eliminarRepetidos(lista: String[]): String[] {
  return lista.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
  });
}

buscarOng(){

  let provSelec= this.itemSelectet[0];
  this.filtrarPorProvincia(provSelec);
  if(this.ongs.length>0)
  {
    if(provSelec.toUpperCase()=="CUSCO")
    {
      this.center = {lat:this.ongs[1].cordenadas.lat, lng:this.ongs[1].cordenadas.lng};
    }
    else{this.center = {lat:this.ongs[0].cordenadas.lat, lng:this.ongs[0].cordenadas.lng};}
    this.zoom=8;
  }else{
    this.center= {lat:-13.515271483270629, lng: -71.97872042823884};
    this.zoom=6.5;
  }
  
}

}
