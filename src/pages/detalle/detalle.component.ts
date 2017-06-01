import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ListaItem, Listas } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/servicios/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:Listas;

  constructor(private alertCtrl:AlertController, private navCtrl:NavController, private navParams:NavParams, private listaDeseos:ListaDeseosService) {
    console.log(this.navParams);
    this.idx = this.navParams.get("id");
    this.lista = this.navParams.get("lista");
  }

  ngOnInit() {}

  actualizarItem(item: ListaItem){
    item.completado = !item.completado;

    let todosMarcados:boolean = true;

    for ( let item of this.lista.items ) {
      if ( !item.completado ) {
        todosMarcados = false;
        break;
      }
    }
    this.lista.terminada = todosMarcados;
    
    this.listaDeseos.actualizarData();
  }

  borrarLista() {
    let confirm = this.alertCtrl.create({
      title: `Eliminar la lista: ${this.lista.nombre}`,
      message: `Desea eliminar la lista: ${this.lista.nombre} ?`,
      buttons: ['Cancelar',
        {
          text: 'Aceptar',
          handler: () => {
            this.listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }


}
