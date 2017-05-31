import { Injectable } from '@angular/core';
import { Listas } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

listas:Listas[] = [];

  constructor() {
    /*let lista1 = new Listas('Compra de supermercado');
    let lista2 = new Listas('Juegos de Videos');
    let lista3 = new Listas('Cosas de la Universidad');

    this.listas.push( lista1 );
    this.listas.push( lista2 );
    this.listas.push( lista3 );*/
    this.cargarData();
   }

   actualizarData(){
     localStorage.setItem("data",JSON.stringify(this.listas));
   }

   cargarData(){
     if (localStorage.getItem("data")) {
       this.listas = JSON.parse(localStorage.getItem("data"));
     }
   }

   agregarLista(lista:Listas) {
     this.listas.push(lista);
     this.actualizarData();
   }

   eliminarLista(idx:number) {
     this.listas.splice(idx,1);
     this.actualizarData();
   }
}
