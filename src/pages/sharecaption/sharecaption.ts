import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'share-caption',
  templateUrl: 'sharecaption.html'
})
export class ShareCaptionPage {
  url : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.url = navParams.get('url')
  }

  handleShare() {
  }

  handleBack() { this.navCtrl.pop() }
}
