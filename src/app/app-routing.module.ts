import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './body/home/home.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { GraficoventasComponent } from './body/graficoventas/graficoventas.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sucursales', component: ListadosucursalesComponent },
  { path: 'grafico', component: GraficoventasComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
