import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IChangeEventDate } from '../../../../models/interfaces/IChangeEventDate';
import { IEvents } from '../../../../models/interfaces/IEvents';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';


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
  
  constructor(){    
  }

  dateEvent:Date = new Date;
  
  ngOnInit(): void {
      this.dateEvent = this.event.date;
  }
 

  @Input() event:IEvents = {
    codEvent:"",
    type: 0,
    date: new Date,
    description: ''
  }  ;

  @Output() public changeDateEmitter:EventEmitter<IChangeEventDate> = new EventEmitter();

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


  public changeDate(event:IEvents, dataEvent: Date):void{
    console.log(event);
    console.log(dataEvent);
   
    console.log(this.event.description);
    console.log(this.event.codEvent);
   
    this.changeDateEmitter.emit({
      codEvent: this.event.codEvent,
      dateEvent: new Date(dataEvent),
      typeEvent: this.event.type
    });

    
  }
}
