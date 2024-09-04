import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEvents } from 'src/app/models/interfaces/IEvents';
import { RecurringEventsService } from 'src/app/services/recurring-events.service';
import { changeDateEvent, loadevents, loadeventsByDays, loadeventssuccess } from 'src/app/shared/store/events.actions';
import { IEventsModel, IEventTypeRequestModel } from 'src/app/shared/store/events.model';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { FormControl, FormGroup } from '@angular/forms';
import { SaintComponent } from '../dialog/saint/saint.component';
import { MatDialog } from '@angular/material/dialog';
import { IDaysEvents } from 'src/app/models/interfaces/IDaysEvents';
import { IChangeEventDate } from 'src/app/models/interfaces/IChangeEventDate';
@Component({
  selector: 'app-main-content',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },

    // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
    // to your app config. We provide it at the component level here, due to limitations
    // of our example generation script.
    provideMomentDateAdapter(undefined, {useUtc: true}),
  ],
    
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  events: IEvents[] = [];
  eventType: string = '';
  viewCalendar: boolean = false;
 

  today: Date = new Date();

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  events$ = new Observable<IEventsModel>();

  constructor(
    private eventsService: RecurringEventsService,
    private routesParameters: ActivatedRoute,
    private store:Store<{events:IEventsModel}>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
  
    this.routesParameters.params.subscribe((params) => {
      this.eventType = params['eventType'];
    
      if (this.eventType != null) {
        switch(this.eventType){
            case "all":
            case "namedays":
            case "birthdays": 
                this.viewCalendar = false;
                
                var request: IEventTypeRequestModel = {
                  eventType: this.eventType
                };
                

                this.store.dispatch(loadevents({data: request}));
                break;
            case "days":
              this.viewCalendar = true;
            
              break;
            case "today":  
              this.viewCalendar = false;
              console.log("today?");
      
              var daysRequest: IDaysEvents = {
                  from: this.today,
                  to: this.today
              }
              
              this.store.dispatch(loadeventsByDays({data: daysRequest}));
              break;
        }
        
      }else{
        this.viewCalendar = false;
        console.log("today?");

        var daysRequest: IDaysEvents = {
            from: this.today,
            to: this.today
        }
        
        this.store.dispatch(loadeventsByDays({data: daysRequest}));
      }
    });
     
   
    
    this.events$ = this.store.select("events");

  }

  openDialogSaint():void{
    let dialogRef = this.dialog.open(SaintComponent, {
      width: '450px',
    });
  }
  
  changeDateEmitterListener(event:IChangeEventDate){
    
    this.store.dispatch(changeDateEvent({data: event}));
  }

}
 

