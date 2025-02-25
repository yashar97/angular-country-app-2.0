import { Component } from '@angular/core';
import { Region } from './region.type';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-pagina-por-region',
  standalone: false,
  templateUrl: './pagina-por-region.component.html',
})
export class PaginaPorRegionComponent {

  titulo: string = 'Búsqueda por Región';
  regiones: Region[] = ['Africa', 'Asia', 'America', 'Europe', 'Oceania'];
  paises: Country[] = [];
  regionSeleccionada: string = '';

  constructor(private service: CountriesService) { }

  seleccionarRegion(region: string): void {
    this.regionSeleccionada = region;
    this.service.buscarPorRegion(region).subscribe(countries => {
      this.paises = countries;
    });
  }

  limpiar(): void {
    this.paises = []; 
  }



}
