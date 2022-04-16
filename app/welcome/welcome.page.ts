import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Media, MediaObject } from '@ionic-native/media/ngx';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public navCtrl: NavController, ) { }
  

  ngOnInit() {
  }

}
