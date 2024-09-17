import { createReducer, on } from "@ngrx/store";
import { loadsaintssuccess } from "./saints.actions";
import { initialState } from "./saints.state";
 

const _saintsReducer = createReducer(
    initialState,
  
    
    on(loadsaintssuccess, (state,action)=>{
         return {
            saints:action.saints
        }
    })
)

export function saintsReducer(state: any, action: any) {
    return _saintsReducer(state, action);
  }