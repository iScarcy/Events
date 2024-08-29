import { Component, Input, OnInit } from '@angular/core';
import { IEvents } from '../../../../models/interfaces/IEvents';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepickerIntl } from '@angular/material/datepicker';

@Component({
  selector: 'app-event',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },

    // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
    // to your app config. We provide it at the component level here, due to limitations
    // of our example generation script.
    provideMomentDateAdapter(undefined, {useUtc: true}),
  ],
 
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  dataEvento:string ="ok";
  
  ngOnInit(): void {
    this.dataEvento = "coap";
  }
 
  @Input() event:IEvents = {
    type: 0,
    date: new Date,
    description: ''
  }  ;



  public getEventType(type:number):string
  {
    switch(type)
    {
      case 0: return "Compleanno";
      case 1: return "Onomastico";
      case 2: return "Anniversario";
      default: return "Error"
    }
  }
}
