import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { IChangeEventDate } from '../../../../models/interfaces/IChangeEventDate';
import { IEvents } from '../../../../models/interfaces/IEvents';
import { DatePipe } from '@angular/common';
import { EventActionResult } from 'src/app/models/enums/eventActionResult';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-event',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: DatePipe }
  ],
   
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  
  constructor(private _datepipe: DatePipe){    
  }

  dateEvent:Date = new Date;
  
  ngOnInit(): void {
      this.dateEvent = this.event.date;
      
  }


  @Input() event:IEvents = {
    codEvent:"",
    type: 0,
    date: new Date,
    description: '',
    eventActionResult : EventActionResult.None
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
    
    this.changeDateEmitter.emit({
      codEvent: this.event.codEvent,
      dateEvent: dataEvent,
      typeEvent: this.event.type
    });
    
    
  }
}
