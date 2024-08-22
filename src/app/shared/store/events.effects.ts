import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RecurringEventsService } from "src/app/services/recurring-events.service";
import { LOAD_EVENTS, LOAD_EVENTS_BY_DAYS, loadeventssuccess } from "./events.actions";
import { exhaustMap, map, Observable } from "rxjs";
import { IDaysEventStoreRequestModel, IEventTypeRequestModel, IEventTypeStoreRequestModel } from "./events.model";
 


@Injectable()
export class EvenetEffects{
    
    
    effects$ =  createEffect(()=>
        this.action$
        .pipe(
            ofType(LOAD_EVENTS),
            exhaustMap((action: IEventTypeStoreRequestModel)  => {                 
                              
                return this.service.getEvents(action.data.eventType).pipe(
                    map((data) => {
                        return loadeventssuccess({ events:data})
                    }) 
                )
            })
        )
    );

    eventsByDays$ = createEffect(() => 
        this.action$
        .pipe(
            ofType(LOAD_EVENTS_BY_DAYS),
            exhaustMap((action: IDaysEventStoreRequestModel) => {
                return this.service.getEventsByDays({from: action.data.from, to: action.data.to}).pipe(
                    map((data) => {
                        return loadeventssuccess({events:data})
                    }) 
                )
            })

        )
    );

    constructor(private action$:Actions, private service:RecurringEventsService){
    
    }
    
}