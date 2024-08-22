import { createReducer,on } from "@ngrx/store";
import { initialState } from "./events.state";
import { loadevents, loadeventssuccess} from "./events.actions";

const _eventsReducer = createReducer(
    initialState,
 
  /*  on(loadevents, (state,action) => {
        return {
            ...state,
            typeEvent:action.eventType
        }
    }),*/
    on(loadeventssuccess, (state,action)=>{
         return {
            events:action.events
        }
    })
)

export function eventsReducer(state: any, action: any) {
    return _eventsReducer(state, action);
  }
  