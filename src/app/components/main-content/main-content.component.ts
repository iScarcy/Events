import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvents } from 'src/app/models/interfaces/IEvents';
import { RecurringEventsService } from 'src/app/services/recurring-events.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  events: IEvents[] = [];
  eventType: string = '';

  constructor(
    private eventsService: RecurringEventsService,
    private routesParameters: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routesParameters.params.subscribe((params) => {
      this.eventType = params['eventType'];
      if (this.eventType != null) {
        this.getEvents(this.eventType);
      }
    });
  }

  public getEvents(eventType: string) {
    this.eventsService.getEvents(eventType).subscribe((response) => {
      this.events = response.sort((a,b) => a.description.localeCompare(b.description));
    });
  }
}
