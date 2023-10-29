import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Ong } from 'src/app/models/Ong';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  ong:Ong;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    this.ong=data;
  }

  ngOnInit() {
    console.log(this.ong)
  }
}
