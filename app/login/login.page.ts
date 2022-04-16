

import { Component, OnInit, ViewChild } from '@angular/core';
import {Howl} from 'howler'

import { IonRange } from "@ionic/angular";
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

 import '@capacitor-community/text-to-speech';
  import { Plugins } from '@capacitor/core';
 
 const {TextToSpeech} = Plugins

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  text:string="";
language:string="en-US";
languages:string[]=[];
rate:number = 1.0;
volume:number =1.0;
pitch:number = 1.0;
voice:string= "female";
voices:string[]=[];
progress:number = 0;
player:Howl;
@ViewChild('range', {static : false}) range: IonRange;

  constructor(private tts: TextToSpeech) {}


 
//  speak(){
// this.tts.speak({
//     text: 'input.',
    
//     rate: 1.0,

//   })
//   .then(() => console.log('Success'))
//   .catch((reason: any) => console.log(reason))
//  }

  ngOnInit() {

    TextToSpeech.getSupportedLanguages().then((val)=>{
       this.languages= val.languages;
     })
    
    TextToSpeech.getSupportedVoices().then((val) => {
      this.voices = val.voices;
    })
 }
  updateProgress() {
  let seek = this.player.seek();
  this.progress = (seek / this.player.duration()) * 100 || 0;
  setTimeout(() => {
    this.updateProgress();
  }, 1000)
}

  

  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100))
  }
stopspeak(){
  this.tts.stop();
  this.player.stop();
}
speakText(){
this.tts.speak({
  
  text:this.text,
 locale:this.language,
  rate:this.rate,
  //Volume:this.Volume,
 })

  this.player.play();
   this.player = new Howl({
     src: [TextToSpeech],

     html5:true,
     onPlay: () => {
       this.updateProgress();
     }
     
  })

.then(()=>{

},(err)=>{
  alert(JSON.stringify(err));
})
   
}

}
