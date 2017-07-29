import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ExplorePage } from '../explore/explore';
import { ShareSellPage } from '../sharesell/sharesell';
import { JournalPage } from '../journal/journal'
import { ProfilePage } from '../profile/profile'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = ShareSellPage;
  tab4Root = JournalPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
