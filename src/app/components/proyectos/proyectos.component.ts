import { Component, Inject } from '@angular/core';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/app/models/Ong';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  ongsList: Ong[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ongService: OngService) {
    // En este punto, puedes acceder a data para obtener los datos pasados.
    console.log('Datos pasados:', data);
  }

  capitalizeText(text: string): string {
    const words = text.toLowerCase().split(' ');
    const capitalizedWords = words.map(word => {
      if (word.length > 3) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else if(word == "ii"){
        return "II"
      }
       else{
        return word;
      }
    });
    return capitalizedWords.join(' ');
  }
  
  
  ngOnInit(): void {
    this.ongService.listOngs().subscribe(ongs => {
      this.ongsList = ongs;
    });
  }
}
