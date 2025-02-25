import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'componente-buscador',
  standalone: false,
  templateUrl: './componente-buscador.component.html',
})
export class ComponenteBuscadorComponent {

  @Input()
  textoPlaceholder!: string;

  @ViewChild('txtInput')
  txtInput!: ElementRef<HTMLInputElement>;

  @Output()
  enviarValorAlPadre: EventEmitter<string> = new EventEmitter<string>();

  empezarBusqueda(): void {
    const valorBusqueda: string = this.txtInput.nativeElement.value;
    this.enviarValorAlPadre.emit(valorBusqueda);
    this.txtInput.nativeElement.value = '';
  }

}
