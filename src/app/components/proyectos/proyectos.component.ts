import { Component, Inject } from '@angular/core';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/app/models/Ong';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  ongsList: Ong[] = [];

  constructor(private ongService: OngService) { }
  capitalizeText(text: string): string {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  ngOnInit(): void {
    this.ongService.listOngs().subscribe(ongs => {
      this.ongsList = ongs;
    });
  }
}
