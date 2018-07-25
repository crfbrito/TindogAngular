import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../modelos/tarea';

@Pipe({
  name: 'filtrador'
})
export class FiltradorPipe implements PipeTransform {

  transform(elementos: any[], valorFiltrar:string, campo:string): any {
    return valorFiltrar? elementos.filter((aElem:any)=>(aElem[campo].toLocaleLowerCase().indexOf(valorFiltrar.toLocaleLowerCase())>=0)) : elementos;
  }

}
