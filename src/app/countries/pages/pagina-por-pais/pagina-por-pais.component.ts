import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-pagina-por-pais',
  standalone: false,
  templateUrl: './pagina-por-pais.component.html',
})
export class PaginaPorPaisComponent {

  titulo: string = 'Búsqueda por país';
  paises: Country[] = [];

  constructor(private service: CountriesService) { }

  buscarPorPais(terminoBusqueda: string): void {
    this.service.buscarPorPais(terminoBusqueda).subscribe(countries => {
      this.paises = countries;
    });
  }

}
