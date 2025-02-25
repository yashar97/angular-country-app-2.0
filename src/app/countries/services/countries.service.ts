import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private url: string = 'https://restcountries.com/v3.1';
    constructor(private httpClient: HttpClient) {
    }

    buscarPorCapital(q: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.url}/capital/${q}`);
    }

    buscarPorPais(q: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.url}/name/${q}`);
    }

    buscarPorRegion(q: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.url}/region/${q}`);
    }

}