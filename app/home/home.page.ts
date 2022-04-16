import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
message:string = null;
  subject: string = null;
file:string = null;
  link: string = null;
  constructor(private socialSharing: SocialSharing) {}

shareit(){
  this.socialSharing.shareViaWhatsApp(this.message,this.file,this.link)
  .then(()=>{

  }).catch((e)=>{

  });
}

}
