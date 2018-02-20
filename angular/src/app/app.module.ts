import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlphaComponent } from './alpha/alpha.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AlphaComponent, SeattleComponent, ChicagoComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
