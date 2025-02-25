import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPorPaisComponent } from './pages/pagina-por-pais/pagina-por-pais.component';
import { PaginaPorRegionComponent } from './pages/pagina-por-region/pagina-por-region.component';
import { PaginaPorCapitalComponent } from './pages/pagina-por-capital/pagina-por-capital.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from "../shared/shared.module";
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    PaginaPorPaisComponent,
    PaginaPorRegionComponent,
    PaginaPorCapitalComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
],
  exports: [
    PaginaPorPaisComponent
  ]
})
export class CountriesModule { }
