import { Component, ViewChild } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('content')nav: NavController; 
  rootPage:any; 
  
  
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
     this.initializeApp1();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('session_storage').then((res)=>{
      if(res == null){
        this.router.navigate(['tabs/tab2']);
      }else{
        this.router.navigate(['/clientpage']);
      }
    });

  }

  initializeApp1() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('session_storage1').then((res)=>{
      if(res == null){
        this.router.navigate(['tabs/tab3']);
      }else{
        this.router.navigate(['/adminpage']);
      }
    });

  }


}

