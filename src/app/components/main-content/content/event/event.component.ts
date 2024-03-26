import { Component, Input } from '@angular/core';
import { Event } from '../../../../models/Event';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() event:Event = new Event("", new Date(),"");
}
