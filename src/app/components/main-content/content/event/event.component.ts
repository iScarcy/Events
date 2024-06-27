import { Component, Input } from '@angular/core';
import { IEvents } from '../../../../models/interfaces/IEvents';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
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
      default: return "Error"
    }
  }
}
