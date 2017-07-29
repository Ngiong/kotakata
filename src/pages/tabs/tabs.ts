import { Component } from '@angular/core';

import { ActionSheetController } from 'ionic-angular'

import { HomePage } from '../home/home';
import { ExplorePage } from '../explore/explore';
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

  constructor(public actionSheetController: ActionSheetController) {

  }

  showActionSheet() {
    let actionSheet = this.actionSheetController.create({
      buttons: [
        {
          cssClass: 'share-button',
          handler: () => {
          }
        },{
          cssClass: 'sell-button',
          handler: () => {
          }
        }
      ],
      cssClass: 'share-sell-action-sheet'
    });

    actionSheet.present()
  }
}
