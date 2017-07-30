import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'sale-product-desc',
  templateUrl: 'saleproductdesc.html'
})
export class SaleProductDescPage {
  url : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.url = navParams.get('url')
  }

  handleNext() {
  }

  handleBack() { this.navCtrl.pop() }
}