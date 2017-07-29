import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImageEditorPage } from '../imageeditor/imageeditor'

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  photos: any;
  share: any;
  grids: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.photos = navParams.get('photos')
    this.share = navParams.get('share')

    this.grids = [];
    let tmp = [];
    for (let i = 0; i < this.photos.length; i++) {
      tmp.push(this.photos[i])
      if ((i + 1) % 3 == 0) { this.grids.push(tmp); tmp = [] }
    }
  }

  handleToggle(x, y) {
    for (let i = 0; i < this.grids.length; i++) {
      for (let j = 0; j < 3; j++) { this.grids[i][j].checked = false }
    }
    this.grids[x][y].checked = !this.grids[x][y].checked 
  }

  handleNext() {
    let url
    for (let i = 0; i < this.grids.length; i++) {
      for (let j = 0; j < 3; j++) { 
        if (this.grids[i][j].checked) url = this.grids[i][j].url
      }
    }

    if (url) {
      this.navCtrl.push(ImageEditorPage, { url: url, share: this.share })
    }
  }

  handleBack() { this.navCtrl.pop() }
}