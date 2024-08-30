import { Component, Input, OnInit } from '@angular/core';
import { IChangeEventDate } from '../../../../models/interfaces/IChangeEventDate';
import { IEvents } from '../../../../models/interfaces/IEvents';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepickerInputEvent, MatDatepickerIntl } from '@angular/material/datepicker';
import { Store } from '@ngrx/store';
import { IEventsModel } from 'src/app/shared/store/events.model';
import { changeDateEvent } from 'src/app/shared/store/events.actions';

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
  
  constructor( private store:Store<{events:IEventsModel}>){
    
  }
  
  ngOnInit(): void {

  }
 
  @Input() event:IEvents = {
    codEvent:"",
    type: 0,
    date: new Date,
    description: ''
  }  ;

   changeDateEventRequest : IChangeEventDate = {
    codEvent: "",
    dateEvent: new Date,
    typeEvent: 0
  }

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


  public changeDate(event: MatDatepickerInputEvent<Date>):void{
    console.log(event);
    console.log(this.event.description);
    console.log(this.event.codEvent);
   
    this.changeDateEventRequest.codEvent = this.event.codEvent;
    this.changeDateEventRequest.dateEvent = this.event.date;
    this.changeDateEventRequest.typeEvent = this.event.type
   
    
   // this.store.dispatch(changeDateEvent({data: this.changeDateEventRequest}));

  }
}
