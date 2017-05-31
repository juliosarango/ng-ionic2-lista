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
    this.listaDeseos.actualizarData();
  }

  borrarLista() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar Lista?',
      message: 'Desea eliminar la lista?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            return;
          }
        },
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
