import { Component,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Ong } from 'src/app/models/Ong';
import { ProyectosComponent } from '../proyectos/proyectos.component';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {

  ong:Ong;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    this.ong=data;
  }

  ngOnInit() {
    
  }
  verProyectos()
  {
    const dialogRef = this.dialog.open(ProyectosComponent, {
      width: '400px',
      data: this.ong,
      height: '90%',
      position: { top: '10px', right:'10px'}
    });
  }

}
