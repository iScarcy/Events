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
import { SaintDialogComponent } from '../dialog/saint/saint.component';
import { MatDialog } from '@angular/material/dialog';
import { IDaysEvents } from 'src/app/models/interfaces/IDaysEvents';
import { IChangeEventDate } from 'src/app/models/interfaces/IChangeEventDate';
import { DatePipe } from '@angular/common';
import { getRouterInfo } from 'src/app/shared/store/Router/Router.Selector';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.model';
@Component({
  selector: 'app-main-content',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: DatePipe },
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
  mainLabel: string = "";
  viewCalendar: boolean = false;
 

  today: Date = new Date();

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  events$ = new Observable<IEventsModel>();

  constructor(
    private store:Store<AppStateModel>,
    private dialog: MatDialog,
    private _datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    
    this.store.select(getRouterInfo).subscribe(url =>{
    
      if (url != null) {
        switch(url){
            case "all":
            case "namedays":
            case "birthdays": 
                
                this.viewCalendar = false;
                
                var request: IEventTypeRequestModel = {
                  eventType: url
                };
                

                this.store.dispatch(loadevents({data: request}));
                break;
            case "days":
              this.viewCalendar = true;
            
              break;
            case "":  
              this.viewCalendar = false;
              console.log("today?");
      
              var daysRequest: IDaysEvents = {
                  from: this.today,
                  to: this.today
              }
              
              this.store.dispatch(loadeventsByDays({data: daysRequest}));
              break;
        }
        this.mainLabel = this.getMainLabel(url);
      }else{
        this.viewCalendar = false;
        console.log("today?");
        this.mainLabel = this.getMainLabel("today");
        var daysRequest: IDaysEvents = {
            from: this.today,
            to: this.today
        }
        
        this.store.dispatch(loadeventsByDays({data: daysRequest}));
      }
     
     
    })
    
    this.events$ = this.store.select("events");

  }

  getMainLabel(pageUrl:string):string{
    switch(pageUrl){
      case "all":
        return "Tutti";
      case "namedays":
        return "Onomastici";
      case "birthdays": 
          return "Compleanni";          
      case "days":
        return "Range di date"
      
      default: return "Oggi: " + this._datepipe.transform(this.today, 'dd/MM/yyyy');
  }
  }

 
  
  changeDateEmitterListener(event:IChangeEventDate){
    
    this.store.dispatch(changeDateEvent({data: event}));
  }

}
 

