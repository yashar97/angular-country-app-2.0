import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ComponenteBuscadorComponent } from './components/componente-buscador/componente-buscador.component';
import { RouterModule } from '@angular/router';
import { AsdComponent } from './components/asd/asd.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ComponenteBuscadorComponent,
    AsdComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    ComponenteBuscadorComponent
  ]
})
export class SharedModule { }
