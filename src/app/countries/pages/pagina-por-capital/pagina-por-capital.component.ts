import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { pipe, tap } from 'rxjs';

@Component({
  selector: 'pagina-por-capital',
  standalone: false,
  templateUrl: './pagina-por-capital.component.html',
})
export class PaginaPorCapitalComponent {

  titulo: string = 'Búsqueda por Capital';
  paises: Country[] = [];


  constructor(private service: CountriesService) { }

  buscarPorCapital(terminoBusqueda: string): void {
    this.service.buscarPorCapital(terminoBusqueda).subscribe(countries => {
      this.paises = countries;
    });
  }
}
