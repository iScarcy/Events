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
        console.log("loadeventssuccess "+action.eventType) ;
        return {
            typeEvent:action.eventType,
            events:action.events
        }
    })
)

export function eventsReducer(state: any, action: any) {
    return _eventsReducer(state, action);
  }
  