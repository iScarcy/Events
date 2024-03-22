import { Component, OnInit } from '@angular/core';
import { IEvents } from 'src/app/models/interfaces/IEvents';
import { RecurringEventsService } from 'src/app/services/recurring-events.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
  
  events: IEvents[] = [];
  
  constructor(private eventsService:RecurringEventsService){}

  ngOnInit(): void {
    
    this.getEvents();

  }


  public getEvents(){

    this.eventsService.getAllEvents().subscribe(

      response => {
        console.log("Ricerca eventi");
        this.events = response;
        console.log("eventi trovati:"+this.events);
      },
      error => {
        console.log(error);
      }

    );

  }

}
