import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private geolocation : Geolocation, 
              private camera : Camera,
              private alertCtrl : AlertController){}

  openCamera(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options)
      .then((img)=>{
        const alert = this.alertCtrl.create({
          title : "Camera",
          message : img,
          buttons : [{
            text : "OK"
          }]
        })
        alert.present();
        console.log(img);
      })
  }

  getLocation() {

    this.geolocation.getCurrentPosition()
      .then((position)=>{

        console.log("Latitude : " + position.coords.latitude + 
                "\nLongitude : " + position.coords.longitude)
      }).catch(err=>console.log(err))
  }

}
