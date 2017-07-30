import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  photos : any
  grids : any

  constructor(public navCtrl: NavController) {
    this.photos = [
      { url: '/assets/img/gallery/Picss1.jpg', checked: false },
      { url: '/assets/img/gallery/Picss2.jpg', checked: false },
      { url: '/assets/img/gallery/Picss3.jpg', checked: false },
      { url: '/assets/img/gallery/Picss4.jpg', checked: false },
      { url: '/assets/img/gallery/Picss5.jpg', checked: false },
      { url: '/assets/img/gallery/Picss6.jpg', checked: false },
      { url: '/assets/img/gallery/Picss7.jpg', checked: false },
      { url: '/assets/img/gallery/Picss8.jpg', checked: false },
      { url: '/assets/img/gallery/Picss9.jpg', checked: false },
      { url: '/assets/img/gallery/Picss10.jpg', checked: false },
      { url: '/assets/img/gallery/Picss11.jpg', checked: false },
      { url: '/assets/img/gallery/Picss12.jpg', checked: false },
      { url: '/assets/img/gallery/Picss13.jpg', checked: false },
      { url: '/assets/img/gallery/Picss14.jpg', checked: false },
      { url: '/assets/img/gallery/Picss15.jpg', checked: false }
    ]  

    this.grids = [];
    let tmp = [];
    for (let i = 0; i < this.photos.length; i++) {
      tmp.push(this.photos[i])
      if ((i + 1) % 3 == 0) { this.grids.push(tmp); tmp = [] }
    }
  }

}
