import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore'
import { GalleryPage } from '../pages/gallery/gallery'
import { ImageEditorPage } from '../pages/imageeditor/imageeditor'
import { ShareCaptionPage } from '../pages/sharecaption/sharecaption'
import { SaleProductDescPage } from '../pages/saleproductdesc/saleproductdesc'
import { JournalPage } from '../pages/journal/journal'
import { ProfilePage } from '../pages/profile/profile'
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExplorePage,
    JournalPage,
    ProfilePage,
    TabsPage,
    GalleryPage,
    ImageEditorPage,
    ShareCaptionPage,
    SaleProductDescPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExplorePage,
    JournalPage,
    ProfilePage,
    TabsPage,
    GalleryPage,
    ImageEditorPage,
    ShareCaptionPage,
    SaleProductDescPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
