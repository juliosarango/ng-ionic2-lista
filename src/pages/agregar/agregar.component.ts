import { Component, OnInit } from '@angular/core';
import { Listas, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/servicios/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];

  constructor(private alertCtrl: AlertController, private navCtrl:NavController, public listaDeseos:ListaDeseosService) {  }

  ngOnInit() {}

  agregarItem() {
    if (this.nombreItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);
    this.nombreItem = "";
  }

  eliminarItem(index:number){
    this.items.splice(index,1);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensaje',
      subTitle: 'Debe ingresar un nombre de la lista',
      buttons: ['OK']
    });
    alert.present();
  }

  guardarLista(){
    if (this.nombreLista.length == 0){
      this.showAlert();
      return;
    }

    let lista = new Listas(this.nombreLista);
    lista.items = this.items;
    this.listaDeseos.agregarLista(lista);

    this.navCtrl.pop();

  }
}
