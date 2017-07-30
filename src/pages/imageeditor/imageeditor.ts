import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShareCaptionPage } from '../sharecaption/sharecaption'
import { SaleProductDescPage } from '../saleproductdesc/saleproductdesc'

@Component({
  selector: 'image-editor',
  templateUrl: 'imageeditor.html'
})
export class ImageEditorPage {
  url : any;
  share : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.url = navParams.get('url')
    this.share = navParams.get('share')
  }

  handleNext() {
    if (this.share)
      this.navCtrl.push(ShareCaptionPage, { url: this.url })
    else 
      this.navCtrl.push(SaleProductDescPage, { url: this.url })
  }

  handleBack() { this.navCtrl.pop() }

}
