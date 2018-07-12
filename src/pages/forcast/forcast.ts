import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-forcast',
  templateUrl: 'forcast.html',
})
export class ForcastPage {
  a={first:{f1:"sdalfmas"},se:{s:"asdsa"},d:{c:[1,2,3,4]}}
 
  forcast: any;
  location: {
    city: string,
    state: string
  }
  constructor(
    public navCtrl: NavController,
    private weatherprovider: WeatherProvider,
    private storage: Storage
  ) {

  }
  ionViewWillEnter() {
    this.storage.get('location').then((val) => {
      if (val != null) {
  this.location=JSON.parse(val)
      }
      else {
        this.location = {
          city: "deoband",
          state: "up"
        }
      }
        this.weatherprovider.getforcast(this.location.city, this.location.state)
      .subscribe(forcast => {
        console.log(this.a)
        console.log(forcast);
        this.forcast = forcast.current_observation;
      });
    });
    }
      
}