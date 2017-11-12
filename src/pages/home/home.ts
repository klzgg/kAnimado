import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcercaDePage } from '../acerca-de/acerca-de';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goBack() {
  	this.navCtrl.push(AcercaDePage);
  }

}
