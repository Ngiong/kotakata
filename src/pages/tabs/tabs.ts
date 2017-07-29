import { Component } from '@angular/core';

import { ActionSheetController, NavController } from 'ionic-angular'

import { HomePage } from '../home/home';
import { ExplorePage } from '../explore/explore';
import { GalleryPage } from '../gallery/gallery'
import { JournalPage } from '../journal/journal'
import { ProfilePage } from '../profile/profile'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab4Root = JournalPage;
  tab5Root = ProfilePage;

  constructor(public actionSheetController: ActionSheetController,
              public navController: NavController) {

  }

  showActionSheet() {
    let photos = [
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

    let actionSheet = this.actionSheetController.create({
      buttons: [
        {
          cssClass: 'share-button',
          handler: () => {
            this.navController.push(GalleryPage, {
              photos: photos
            })
          }
        },{
          cssClass: 'sell-button',
          handler: () => {
            this.navController.push(GalleryPage)
          }
        }
      ],
      cssClass: 'share-sell-action-sheet'
    });

    actionSheet.present()
  }
}
