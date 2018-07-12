import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LivechatPage } from '../pages/livechat/livechat';
import { SettingsPage } from '../pages/settings/settings';
import { TcPage } from '../pages/tc/tc';
import {ContactUsPage} from '../pages/contact-us/contact-us';
import {ForcastPage} from '../pages/forcast/forcast'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ icons:string,title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {icons:'home', title: 'Home', component: HomePage },
      {icons:'chatboxes',  title: 'LiveChat', component: LivechatPage },
      // {icons:'sunny',  title: 'Forcast', component: ForcastPage },
      {icons:'settings',  title: 'Settings', component: SettingsPage },
      {icons:'information-circle',  title: 'About', component: ListPage },
      {icons:'contact',  title: 'ContactUs', component: ContactUsPage },
      {icons:'git-network',  title: 'GitHub', component: TcPage },
      

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
