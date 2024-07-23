import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RecurringEventsService } from "src/app/services/recurring-events.service";
import { LOAD_EVENTS, loadeventssuccess } from "./events.actions";
import { exhaustMap, map, Observable } from "rxjs";
import { Action } from "rxjs/internal/scheduler/Action";
import { IEventsModel, IStoreModel } from "./events.model";

@Injectable()
export class EvenetEffects{
    
    
    effects$ =  createEffect(()=>
        this.action$
        .pipe(
            ofType(LOAD_EVENTS),
            exhaustMap((action: IStoreModel)  => {                 
                
                return this.service.getEvents(action.data.typeEvent).pipe(
                    map((data) => {
                        return loadeventssuccess({eventType:action.data.typeEvent, events:data})
                    }) 
                )
            })
        )
    );

    constructor(private action$:Actions, private service:RecurringEventsService){
    
    }
    
}