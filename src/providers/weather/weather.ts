import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class WeatherProvider {
  apiKey = '373b080432fa75fd';
  url;
  urlforcast; 
constructor(public http: Http) {
  console.log('Hello WeatherProvider Provider');
  this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  this.urlforcast='http://api.wunderground.com/api/'+this.apiKey+'/forecast/q'
}
  getweather(city,state){
  return this.http.get(this.url+'/'+state+'/'+city+'.json')
  .map(res => res.json());
}  
getforcast(city,state){
  return this.http.get(this.urlforcast+'/'+state+'/'+city+'.json')
  .map(res => res.json());
}

}