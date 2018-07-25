import { Injectable } from '@angular/core';

@Injectable()
export class LogoService {

  frase:string="Hola Mundo!!";
  
  constructor() { }

  decirHola(){
    return this.frase;
  }

  
}
