import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/servicios/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(private listaDeseos:ListaDeseosService, private navCtrl:NavController) {  }

  ngOnInit() {}

  verDetalle(lista, i:number){
    this.navCtrl.push( DetalleComponent, {lista, i} );
  }
}
