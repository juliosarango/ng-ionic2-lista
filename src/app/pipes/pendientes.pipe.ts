import { Pipe, PipeTransform } from '@angular/core';
import { Listas } from '../clases/listas';

@Pipe({
  name: 'pendientes',
  //con esto se indica que cada vez que mostramos un dato, angular debe volver a evaluar todo.
  pure:false
})
export class PendientesPipe implements PipeTransform {
  transform(listas: Listas[], estado:boolean = false): Listas[] {
    let nuevaLista:Listas[] = [];

    for (let lista of listas) {
      if (lista.terminada == estado) {
        nuevaLista.push( lista );

      }
    }
    return nuevaLista;
  }
}
