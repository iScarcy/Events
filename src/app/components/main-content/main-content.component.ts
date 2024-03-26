import { Component, OnInit } from '@angular/core';
import { IEvents } from 'src/app/models/interfaces/IEvents';
import { RecurringEventsService } from 'src/app/services/recurring-events.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  
  events: IEvents[] = [];

  constructor(private eventsService:RecurringEventsService){}
 
  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents(){

    this.eventsService.getAllEvents().subscribe(

      response => {
       
        this.events = response;
      
      },
      error => {
        console.log(error);
      }

    );

  }

}
