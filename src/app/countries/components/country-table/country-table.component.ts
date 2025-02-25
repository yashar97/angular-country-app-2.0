import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'country-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {

  @Input()
  paises!: Country[];

}
