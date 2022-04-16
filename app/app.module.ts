
import { ErrorHandler,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import{Platform} from "@ionic/angular" ;
//  import {SplashScreen} from '@ionic-native/splash-screen/ngx';
// import {StatusBar} from '@ionic-native/status-bar/ngx' ;
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from "src/environments/environment" ;

import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

// import '@capacitor-community/text-to-speech';
// import { Plugins } from '@capacitor/core';
// const { TextToSpeech } = Plugins


import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
//import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [SpeechRecognition, TextToSpeech, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],



})
export class AppModule {}

