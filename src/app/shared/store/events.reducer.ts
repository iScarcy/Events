import { createReducer,on } from "@ngrx/store";
import { initialState } from "./events.state";
import { setEvents } from "./events.actions";

const _eventsReducer = createReducer(
    initialState,
    on(setEvents, (state, action) => {
        return {
            ...state,
            events:[{type:0, date: new Date, description:"Saro Farsaperla"}]
        }
    })
)

export function eventsReducer(state: any, action: any) {
    return _eventsReducer(state, action);
  }
  