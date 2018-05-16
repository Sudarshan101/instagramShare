import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	currentImage = null;
  constructor(public navCtrl: NavController, public socialSharing: SocialSharing, private camera: Camera) {

  }
  loadImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY      
    }
 
    this.camera.getPicture(options).then(data => {
      this.currentImage = 'data:image/jpeg;base64,' + data;
     }, err => {
      // Handle error
      console.log(err)
     });
  }
  share(){
		this.socialSharing.shareViaInstagram('Share instagram', this.currentImage).then(() => {
		  // Success!
		}).catch(() => {
		  // Error!
		});
  }
}
