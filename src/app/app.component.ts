import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPage = [
    {
    title: 'Home',
    url: '',
    icon: 'home'
    },
    {
    title: 'List',
    url: '/list',
    icon: 'list'
    },
    {
    title: 'About',
    url: '/tabs/tab2',
    icon: 'alert'
    },
    {
      title: 'Contact',
      url: '/tabs/tab3',
      icon: 'contact'
    }
    ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
