import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RecurringEventsService } from "src/app/services/recurring-events.service";
import { LOAD_EVENTS, loadeventssuccess } from "./events.actions";
import { exhaustMap, map, Observable } from "rxjs";
import { Action } from "rxjs/internal/scheduler/Action";

@Injectable()
export class EvenetEffects{

    
    
    effects$ =  createEffect(()=>
        this.action$
        .pipe(
            ofType(LOAD_EVENTS),
            exhaustMap(() =>                  
                this.service.getEvents("birdays").pipe(
                map((data) => {
                    return loadeventssuccess({eventType:"birdays", events:data})
                }) 
            )
            )
        )
    );

    constructor(private action$:Actions, private service:RecurringEventsService){
    
    }
    
}