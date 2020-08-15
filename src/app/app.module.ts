
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IonicStorageModule} from '@ionic/Storage';

import { PostProvider } from '../providers/post-provider';
import {HttpModule} from '@angular/http';
import {NgCalendarModule} from 'ionic2-calendar';
import { File } from '@ionic-native/file/ngx';
// import { FileOpener } from '@ionic-native/file-opener';
import { FileOpener } from '@ionic-native/file-opener/ngx';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    NgCalendarModule,
    
  HttpModule,
  IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileOpener,
    PostProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
