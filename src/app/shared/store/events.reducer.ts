import { createReducer,on } from "@ngrx/store";
import { initialState } from "./events.state";
import { setEvents } from "./events.actions";

const _eventsReducer = createReducer(
    initialState,
    on(setEvents, (state, action) => {
        console.log(action.eventType) ;
        return {
            typeEvent:action.eventType,
            events:action.events
        }
    })
)

export function eventsReducer(state: any, action: any) {
    return _eventsReducer(state, action);
  }
  