import { Injectable } from '@angular/core';

@Injectable()
export class OperacionesService {

  constructor(public valorEnMemoria: number, public valorEnPantalla: number, public operation: string) { }

  // public suma(otroValor: number): number {
  //   let result = 0;
  //   result = this.valorEnMemoria + otroValor;
  //   return result;
  // }
  // public resta(otroValor: number): number {
  //   let result = 0;
  //   result = this.valorEnMemoria - otroValor;
  //   return result;
  // }
  // public producto(otroValor: number): number {
  //   let result = 0;
  //   result = this.valorEnMemoria * otroValor;
  //   return result;
  // }
  // public division(otroValor: number): number {
  //   let result = 0;
  //   result = this.valorEnMemoria / otroValor;
  //   return result;
  // }
  public operacion(string): void {
    this.valorEnMemoria = this.valorEnPantalla;
  }
  public borrado(): void {
    this.valorEnMemoria = 0;
  }
}
