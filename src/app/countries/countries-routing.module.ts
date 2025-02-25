import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPorPaisComponent } from './pages/pagina-por-pais/pagina-por-pais.component';
import { PaginaPorCapitalComponent } from './pages/pagina-por-capital/pagina-por-capital.component';
import { PaginaPorRegionComponent } from './pages/pagina-por-region/pagina-por-region.component';

const routes: Routes = [
    {
        path: 'por-pais',
        component: PaginaPorPaisComponent
    },
    {
        path: 'por-capital',
        component: PaginaPorCapitalComponent
    },
    {
        path: 'por-region',
        component: PaginaPorRegionComponent
    },
    {
        path: '**',
        redirectTo: 'por-pais'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CountriesRoutingModule { }
