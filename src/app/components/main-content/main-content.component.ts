import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEvents } from 'src/app/models/interfaces/IEvents';
import { RecurringEventsService } from 'src/app/services/recurring-events.service';
import { setEvents } from 'src/app/shared/store/events.actions';
import { IEventsModel } from 'src/app/shared/store/events.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  events: IEvents[] = [];
  eventType: string = '';

  events$ = new Observable<IEventsModel>();

  constructor(
    private eventsService: RecurringEventsService,
    private routesParameters: ActivatedRoute,
    private store:Store<{events:IEventsModel}>
  ) {}

  ngOnInit(): void {
    this.routesParameters.params.subscribe((params) => {
      this.eventType = params['eventType'];
      if (this.eventType != null) {
        this.getEvents(this.eventType);
      }
    });

    this.events$ = this.store.select("events");

  }

  public getEvents(eventType: string) {
    this.eventsService.getEvents(eventType).subscribe((response) => {
        this.store.dispatch(setEvents({eventType: eventType, events:response}));      
    });
  }
}
