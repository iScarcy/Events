import { createReducer,on } from "@ngrx/store";
import { initialState } from "./events.state";
import {changeDateEventSuccess, loadevents, loadeventssuccess} from "./events.actions";
import { EventActionResult } from "src/app/models/enums/eventActionResult";
import { IEvents } from "src/app/models/interfaces/IEvents";

const _eventsReducer = createReducer(
    initialState,
  
    on(changeDateEventSuccess, (state,action) => {
        
        const index = state.events.findIndex((x) => x.codEvent == action.event.codEvent)      
        let newEvents = [...state.events];
        console.log(newEvents[index]);
        
       let event:IEvents = {
            codEvent:newEvents[index].codEvent,
            type: newEvents[index].type,
            date: action.event.date,
            description: newEvents[index].description,
            eventActionResult : action.event.eventActionResult
        }
       
        newEvents[index] = event;
        
        return {
            events:newEvents
        }
    }),  
    on(loadeventssuccess, (state,action)=>{
         return {
            events:action.events
        }
    })
)

export function eventsReducer(state: any, action: any) {
    return _eventsReducer(state, action);
  }
  