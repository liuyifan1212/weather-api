import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city : string;
  data:any;
  weather:string;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSeattle()
  }
  getSeattle(){
    let observable = this._httpService.seattle()
    observable.subscribe(data =>{
      //console.log("Congrats!got your data!", data)
  
      this.data = data
      this.weather = data.name
  
   

      console.log(this.data)
    
    })
  }

}
