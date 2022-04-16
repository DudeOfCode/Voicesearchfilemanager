




import { Component, OnInit } from '@angular/core';

import {  Platform } from '@ionic/angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  matches: String[];
  // options:any;
   isRecording = false;
bgcolor: string ='green'
  constructor( private speechRecognition: SpeechRecognition , private plt: Platform, private cd: ChangeDetectorRef) { }
//   isIos() {
//     return this.plt.is('ios');
//   }
// isavay(){
//   this.speechRecognition.isRecognitionAvailable()
//     .then((available: boolean) => console.log(available))
// }

  


  ngOnInit() {
this.speechRecognition.hasPermission() 
.then((hasPermission: boolean)=>{
  if (!hasPermission){
    this.speechRecognition.requestPermission()
    .then(
      ()=> console.log('Granted'),
      ()=> console.log('Denied')
    )
  }

});

  }

start(){
  this.speechRecognition.startListening()
  .subscribe(
  (matches: Array <string>)=>{
    console.log(matches);
this.bgcolor = matches[0];
   this.matches = matches;
  this.cd.detectChanges();
  this.isRecording = true;
    }
  )
}
  stop() {
     this.speechRecognition.stopListening()
   }
  shode() {
     this.speechRecognition.isRecognitionAvailable()
       .then((available: boolean) => console.log(available))
   }

}




  // isIos() {
  //   return this.plt.is('ios');
  // }

  // stop() {
  //   this.speechRecognition.stopListening().then(() => {
  //     this.isRecording = false;
  //   });
  // }

  // getPerm() {
  //   this.speechRecognition.hasPermission()
  //     .then((hasPermission: boolean) => {
  //       if (!hasPermission) {
  //         this.speechRecognition.requestPermission();
  //       }
  //     });
  // }

  // start() {
  //   let options = {
  //     language: 'en-US'
  //   }
  //   this.speechRecognition.startListening().subscribe(matches => {
  //     this.matches = matches;
  //     this.cd.detectChanges();
  //   });
  //   
  // }

//}

  // start() {
  //   this.speechRecognition.startListening()
  //     .subscribe(
  //     (matches: string[]) => console.log(matches),
  //     (onerror) => console.log('error:', onerror)
  //     )

  //   this.speechRecognition.hasPermission()
  //     .then((hasPermission: boolean) => {

  //       if (!hasPermission) {
  //         this.speechRecognition.requestPermission()
  //           .then(
  //           () => console.log('Granted'),
  //           () => console.log('Denied')
  //           )
  //       }

  //     });

  // }
  // shode(){
  //   this.speechRecognition.isRecognitionAvailable()
  //     .then((available: boolean) => console.log(available))
  // }
  // stop(){
  //   this.speechRecognition.stopListening()
  // }
  // lang(){
  //   this.speechRecognition.getSupportedLanguages()
  //     .then(
  //     (languages: string[]) => console.log(languages),
  //     (error) => console.log(error)
  //     )
  // }
   
