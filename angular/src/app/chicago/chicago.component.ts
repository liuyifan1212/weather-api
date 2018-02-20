import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city : string;
  data:any;
  weather:string;


  constructor(private _httpService: HttpService) { }
  

  ngOnInit() {
   
    this.getChicago()
  

  }
  getChicago(){
    let observable = this._httpService.chicago()
    observable.subscribe(data =>{
      //console.log("Congrats!got your data!", data)
  
      this.data = data
      this.weather = data.name
  
   

      console.log(this.data)
    
    })
  }

}
