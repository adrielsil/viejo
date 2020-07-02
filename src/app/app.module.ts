import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { HomeComponent } from './body/home/home.component';
import { GraficoventasComponent } from './body/graficoventas/graficoventas.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ListadosucursalesComponent,
    HomeComponent,
    GraficoventasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
