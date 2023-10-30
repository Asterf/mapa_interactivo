import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapaComponent,
    InformacionComponent,
    ProyectosComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule, 
    MatListModule,
    MatDialogModule],
  providers: [{provide: MAT_DIALOG_DATA, useValue:{}},
  {provide:MatDialogRef, useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
