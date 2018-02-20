import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
    //this.chicago();
    //this.seattle();
  }
  chicago(){
    // our http response is an Observable, store it in a variable
    //let tempObservable = this._http.get('http://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=38ed520286ab541243ddee4e7fe64fab');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=38ed520286ab541243ddee4e7fe64fab')
  }
  seattle(){
    // our http response is an Observable, store it in a variable
    //let tempObservable = this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=38ed520286ab541243ddee4e7fe64fab');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=38ed520286ab541243ddee4e7fe64fab')
  

  }


}
